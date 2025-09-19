import { useState, useRef, useEffect } from 'react';
import {
  PaperAirplaneIcon,
  UserIcon,
  SparklesIcon,
  ClockIcon,
  MicrophoneIcon,
  StopIcon,
  ExclamationTriangleIcon,
  HeartIcon
} from '@heroicons/react/24/outline';

// Type definitions
interface Message {
  id: string;
  content: string;
  type: 'user' | 'assistant' | 'prediction'; // Add prediction type
  timestamp: Date;
  predictions?: DiseasePrediction[]; // Add optional predictions field
}

interface DiseasePrediction {
  disease: string;
  probability: number;
}

interface ChatAreaProps {
  messages: Message[];
  onSendMessage: (message: string) => void;
  isLoading: boolean;
  userId: string;
}

export default function ChatArea({ messages, onSendMessage, isLoading, userId }: ChatAreaProps) {
  const [inputMessage, setInputMessage] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const [mediaRecorder, setMediaRecorder] = useState<MediaRecorder | null>(null);
  const [isPredicting, setIsPredicting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Enhanced message sending with disease prediction
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (inputMessage.trim() && !isLoading && userId) {
      const messageToSend = inputMessage;
      setInputMessage('');
      
      // Send message to chat
      await onSendMessage(messageToSend);
      
      // Auto-predict diseases if message contains medical keywords
      const medicalKeywords = ['pain', 'ache', 'hurt', 'sick', 'fever', 'cough', 'headache', 'nausea', 'tired', 'dizzy', 'swollen', 'rash', 'bleeding', 'vomiting', 'symptoms', 'feel', 'throat', 'stomach', 'chest', 'back'];
      const containsMedicalKeywords = medicalKeywords.some(keyword => 
        messageToSend.toLowerCase().includes(keyword)
      );
      
      if (containsMedicalKeywords) {
        await predictDiseases(messageToSend);
      }
    }
  };

  // Disease prediction function that adds predictions to chat
  const predictDiseases = async (inputText?: string) => {
    if (!userId) return;
    
    setIsPredicting(true);
    try {
      const textToAnalyze = inputText || inputMessage || messages
        .filter(m => m.type === 'user')
        .slice(-3)
        .map(m => m.content)
        .join(' ');

      const response = await fetch('/api/predict/diseases', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userId,
          currentInput: textToAnalyze,
          symptoms: []
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to predict diseases');
      }

      const data = await response.json();
      if (data.success && data.predictions) {
        // Create a prediction message to add to chat
        const predictionMessage: Message = {
          id: `prediction-${Date.now()}`,
          content: formatPredictionsAsText(data.predictions),
          type: 'prediction',
          timestamp: new Date(),
          predictions: data.predictions
        };
        
        // You'll need to add this to your messages state in the parent component
        // For now, we'll use the regular onSendMessage to display it
        // onSendMessage(predictionMessage.content);
        console.log('Predictions:', data.predictions);
      }
    } catch (error) {
      console.error('Error predicting diseases:', error);
      // Could show a toast notification here
    } finally {
      setIsPredicting(false);
    }
  };

  // Format predictions as text for chat display
  const formatPredictionsAsText = (predictions: DiseasePrediction[]) => {
    let text = "🏥 **Disease Prediction Results:**\n\n";
    predictions.forEach((pred, index) => {
      const percentage = (pred.probability * 100).toFixed(0);
      text += `${index + 1}. **${pred.disease}** - ${percentage}% likelihood\n`;
    });
    text += "\n⚠️ *This is for informational purposes only. Please consult a healthcare professional for proper medical diagnosis.*";
    return text;
  };

  // Manual disease prediction button
  const handleManualPrediction = async () => {
    if (!userId || messages.length === 0) return;
    
    // Get recent user messages
    const recentUserMessages = messages
      .filter(m => m.type === 'user')
      .slice(-3)
      .map(m => m.content)
      .join(' ');
    
    if (recentUserMessages.trim()) {
      await predictDiseases(recentUserMessages);
    }
  };

  // Audio transcription using your backend API
  const transcribeAudio = async (audioBlob: Blob) => {
    try {
      const formData = new FormData();
      formData.append('file', audioBlob, 'audio.webm');
      
      const response = await fetch('/api/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('Failed to transcribe audio');
      }

      const data = await response.json();
      
      if (data.success && data.text) {
        setInputMessage(prev => prev + (prev ? ' ' : '') + data.text);
      } else {
        console.warn('No speech detected');
      }
    } catch (error) {
      console.error('Error transcribing audio:', error);
      alert('Error transcribing audio. Please try again.');
    }
  };

  // Recording functions
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        audio: {
          sampleRate: 16000,
          channelCount: 1,
          echoCancellation: true,
          noiseSuppression: true,
        } 
      });
      
      const mimeType = MediaRecorder.isTypeSupported('audio/webm;codecs=opus') 
        ? 'audio/webm;codecs=opus' 
        : 'audio/webm';
      
      const recorder = new MediaRecorder(stream, { mimeType });
      const chunks: Blob[] = [];
      
      recorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      recorder.onstop = () => {
        const audioBlob = new Blob(chunks, { type: mimeType });
        transcribeAudio(audioBlob);
        stream.getTracks().forEach(track => track.stop());
      };

      recorder.start();
      setMediaRecorder(recorder);
      setIsRecording(true);
    } catch (error) {
      console.error('Error starting recording:', error);
      alert('Error accessing microphone. Please check permissions.');
    }
  };

  const stopRecording = () => {
    if (mediaRecorder && mediaRecorder.state !== 'inactive') {
      mediaRecorder.stop();
      setIsRecording(false);
      setMediaRecorder(null);
    }
  };

  const toggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }
  };

  const formatTime = (timestamp: Date) => {
    return new Date(timestamp).toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: false
    });
  };

  // Render prediction message
  const renderPredictionMessage = (predictions: DiseasePrediction[]) => {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <div className="flex items-start space-x-3">
          <HeartIcon className="w-5 h-5 text-red-500 mt-1 flex-shrink-0" />
          <div className="flex-1">
            <h4 className="text-sm font-semibold text-red-800 mb-2">Disease Predictions</h4>
            <div className="space-y-2">
              {predictions.map((prediction, index) => (
                <div key={index} className="flex items-center justify-between bg-white p-2 rounded border">
                  <span className="text-sm font-medium text-gray-900">
                    {prediction.disease}
                  </span>
                  <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                    prediction.probability > 0.7 
                      ? 'bg-red-100 text-red-800' 
                      : prediction.probability > 0.4 
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-green-100 text-green-800'
                  }`}>
                    {(prediction.probability * 100).toFixed(0)}%
                  </span>
                </div>
              ))}
            </div>
            <p className="text-xs text-red-600 mt-2 italic">
              ⚠️ This is for informational purposes only. Please consult a healthcare professional for proper medical diagnosis.
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex-1 flex flex-col bg-gray-50 h-full">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center">
              <SparklesIcon className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">AI Medical Assistant</h2>
              <p className="text-sm text-teal-600 flex items-center space-x-1">
                <span>Online • Ready to help with health concerns</span>
              </p>
            </div>
          </div>
          
          {/* Disease Prediction Button */}
          <button
            onClick={handleManualPrediction}
            disabled={isPredicting || !userId || messages.filter(m => m.type === 'user').length === 0}
            className="px-4 py-2 bg-gradient-to-r from-red-400 to-pink-400 text-white rounded-lg hover:from-red-500 hover:to-pink-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center space-x-2"
          >
            <HeartIcon className="w-4 h-4" />
            <span>{isPredicting ? 'Analyzing...' : 'Predict Diseases'}</span>
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-6 space-y-4">
        {messages.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-full text-center">
            <div className="w-16 h-16 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-2xl flex items-center justify-center mb-4">
              <SparklesIcon className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">How can I help with your health today?</h3>
            <p className="text-gray-600 max-w-md">
              Describe your symptoms using voice or text. I can provide health information and predict possible conditions based on your medical history.
            </p>
            <p className="text-xs text-red-600 mt-2">
              ⚠️ This is for informational purposes only. Always consult healthcare professionals for medical advice.
            </p>
          </div>
        ) : (
          messages.map((message, index) => (
            <div key={message.id || index}>
              {message.type === 'prediction' ? (
                // Render prediction message
                <div className="flex justify-center">
                  <div className="max-w-2xl w-full">
                    {message.predictions && renderPredictionMessage(message.predictions)}
                  </div>
                </div>
              ) : (
                // Render regular message
                <div className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`flex items-start space-x-3 max-w-3xl ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user'
                        ? 'bg-gradient-to-r from-teal-400 to-cyan-400'
                        : 'bg-gradient-to-r from-teal-400 to-cyan-400'
                    }`}>
                      {message.type === 'user' ? (
                        <UserIcon className="w-4 h-4 text-white" />
                      ) : (
                        <SparklesIcon className="w-4 h-4 text-white" />
                      )}
                    </div>
                    <div className={`flex flex-col ${message.type === 'user' ? 'items-end' : 'items-start'}`}>
                      <div className={`px-4 py-3 rounded-2xl max-w-full ${
                        message.type === 'user'
                          ? 'bg-gradient-to-r from-teal-400 to-cyan-400 text-white'
                          : 'bg-white border border-gray-200 text-gray-900 shadow-sm'
                      }`}>
                        <p className="text-sm leading-relaxed whitespace-pre-wrap">{message.content}</p>
                      </div>
                      <div className="flex items-center space-x-1 mt-1">
                        <ClockIcon className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-500">{formatTime(message.timestamp)}</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))
        )}
        {isLoading && (
          <div className="flex justify-start">
            <div className="flex items-start space-x-3 max-w-3xl">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-400 to-cyan-400 rounded-full flex items-center justify-center flex-shrink-0">
                <SparklesIcon className="w-4 h-4 text-white" />
              </div>
              <div className="bg-white border border-gray-200 px-4 py-3 rounded-2xl shadow-sm">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          </div>
        )}
        {isPredicting && (
          <div className="flex justify-center">
            <div className="bg-red-50 border border-red-200 px-4 py-3 rounded-2xl shadow-sm">
              <div className="flex items-center space-x-2">
                <HeartIcon className="w-4 h-4 text-red-500 animate-pulse" />
                <span className="text-sm text-red-700">Analyzing symptoms for disease predictions...</span>
              </div>
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="bg-white border-t border-gray-200 p-4">
        <form onSubmit={handleSubmit} className="flex space-x-3">
          <div className="flex-1 relative">
            <input
              ref={inputRef}
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder={isRecording ? "Listening..." : "Describe your symptoms or health concerns..."}
              disabled={isLoading}
              className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent resize-none text-sm disabled:opacity-50 disabled:cursor-not-allowed"
            />
          </div>
          
          {/* Voice Input Button */}
          <button
            type="button"
            onClick={toggleRecording}
            disabled={isLoading}
            className={`px-4 py-3 rounded-xl transition-all flex items-center justify-center min-w-[48px] ${
              isRecording
                ? 'bg-red-500 hover:bg-red-600 text-white animate-pulse'
                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
            } disabled:opacity-50 disabled:cursor-not-allowed`}
            title={isRecording ? "Stop recording" : "Start voice input"}
          >
            {isRecording ? (
              <StopIcon className="w-5 h-5" />
            ) : (
              <MicrophoneIcon className="w-5 h-5" />
            )}
          </button>
          
          {/* Send Button */}
          <button
            type="submit"
            disabled={!inputMessage.trim() || isLoading}
            className="px-4 py-3 bg-gradient-to-r from-teal-400 to-cyan-400 text-white rounded-xl hover:from-teal-500 hover:to-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all flex items-center justify-center min-w-[48px]"
          >
            <PaperAirplaneIcon className="w-5 h-5" />
          </button>
        </form>
        
        {/* Recording indicator */}
        {isRecording && (
          <div className="flex items-center justify-center mt-2 text-sm text-red-600">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse mr-2"></div>
            Recording... Click stop when finished
          </div>
        )}
        
        {/* Disclaimer */}
        <p className="text-xs text-gray-500 text-center mt-2">
          This AI provides health information only. Always consult healthcare professionals for medical advice.
        </p>
      </div>
    </div>
  );
}