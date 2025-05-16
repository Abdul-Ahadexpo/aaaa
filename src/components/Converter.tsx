import React, { useState, useEffect, useRef } from 'react';
import { convertToSymbols, convertToText } from '../utils/cipher';
import { Copy, Trash2 } from 'lucide-react';

const Converter: React.FC = () => {
  const [inputText, setInputText] = useState('');
  const [outputText, setOutputText] = useState('');
  const [mode, setMode] = useState<'toNioga' | 'toText'>('toNioga');
  const [copySuccess, setCopySuccess] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    // Auto-convert text when input changes
    if (inputText) {
      convertText();
    } else {
      setOutputText('');
    }
  }, [inputText, mode]);

  const convertText = () => {
    if (mode === 'toNioga') {
      setOutputText(convertToSymbols(inputText));
    } else {
      setOutputText(convertToText(inputText));
    }
  };

  const handleCopy = async () => {
    if (outputText) {
      try {
        await navigator.clipboard.writeText(outputText);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } catch (err) {
        console.error('Failed to copy text: ', err);
      }
    }
  };

  const clearText = () => {
    setInputText('');
    setOutputText('');
    if (textareaRef.current) {
      textareaRef.current.focus();
    }
  };

  return (
    <div className="flex flex-col w-full max-w-4xl mx-auto p-4 space-y-6 animate-fadeIn">
      <div className="relative">
        <textarea
          ref={textareaRef}
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder={mode === 'toNioga' ? "Type your message here..." : "Paste Nioga text here..."}
          className="w-full h-40 p-5 border-2 border-indigo-300 rounded-xl shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 transition-all duration-300 resize-none"
        />
        {inputText && (
          <button
            onClick={clearText}
            className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition-colors"
            aria-label="Clear text"
          >
            <Trash2 size={18} />
          </button>
        )}
      </div>

      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        <button
          onClick={() => setMode('toNioga')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1 ${
            mode === 'toNioga'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
              : 'bg-white text-indigo-700 border-2 border-indigo-300'
          }`}
        >
          To Nioga TXT
        </button>
        <button
          onClick={() => setMode('toText')}
          className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 shadow hover:shadow-lg transform hover:-translate-y-1 ${
            mode === 'toText'
              ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
              : 'bg-white text-indigo-700 border-2 border-indigo-300'
          }`}
        >
          To Text
        </button>
      </div>

      <div className="relative">
        <div className="w-full min-h-40 p-5 bg-gradient-to-br from-gray-50 to-indigo-50 border-2 border-indigo-200 rounded-xl shadow-inner overflow-auto whitespace-pre-wrap break-words">
          {outputText || <span className="text-gray-400 italic">Output will appear here...</span>}
        </div>
        
        {outputText && (
          <button
            onClick={handleCopy}
            className={`absolute bottom-4 right-4 p-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-110 ${
              copySuccess 
                ? 'bg-green-500 text-white' 
                : 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white'
            }`}
            aria-label="Copy to clipboard"
          >
            <Copy size={20} />
          </button>
        )}
      </div>
    </div>
  );
};

export default Converter;