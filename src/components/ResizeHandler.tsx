// components/ResizeHandle.tsx
import { PanelResizeHandle } from 'react-resizable-panels';
import { GripVertical } from 'lucide-react';

export default function ResizeHandle() {
    return (
        <PanelResizeHandle className=" bg-gray-100 hover:bg-teal-300 transition-colors relative group">
            <div className="absolute inset-y-0 left-1/2 transform -translate-x-1/2 w-1 bg-gray-200 group-hover:bg-teal-500 transition-colors">
                <GripVertical className=" h-2 text-gray-200 group-hover:text-teal-600 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            </div>
        </PanelResizeHandle>
    );
}