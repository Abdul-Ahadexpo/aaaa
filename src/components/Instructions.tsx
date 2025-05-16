import React from 'react';
import { cipher } from '../utils/cipher';
import { ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Instructions: React.FC = () => {
  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 p-4 animate-slideIn">
      <div className="bg-white rounded-xl shadow-lg p-6">
        <Link 
          to="/" 
          className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors mb-4"
        >
          <ChevronLeft size={20} /> Back to Converter
        </Link>
        
        <h1 className="text-3xl font-bold text-gray-800 mb-6">How to Use Doro Chat</h1>
        
        <div className="space-y-8">
          <div className="instruction-card">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">1. "To Nioga TXT" Button:</h3>
            <p className="leading-relaxed text-gray-700">
              Press this button to convert your regular text into a cool, secret code.<br/>
              <span className="font-medium text-indigo-600">For example:</span>{' '}
              <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">HELLO</code> becomes{' '}
              <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">Π∠ΓΓ∤</code>.
              It's perfect for sharing messages only your friends can understand!
            </p>
          </div>
          
          <div className="instruction-card">
            <h3 className="text-xl font-semibold text-indigo-600 mb-3">2. "To Text" Button:</h3>
            <p className="leading-relaxed text-gray-700">
              Use this button to decode the symbols back into readable text.<br/>
              <span className="font-medium text-indigo-600">For instance:</span>{' '}
              <code className="bg-gray-200 px-2 py-1 rounded text-gray-800">Π∠ΓΓ∤</code> will 
              transform back into <code className="bg-gray-100 px-2 py-1 rounded text-gray-800">HELLO</code>.
              It's like solving a fun puzzle with just a click!
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-xl shadow-lg p-6 instruction-card">
        <h3 className="text-xl font-semibold text-indigo-600 mb-3">Alphabet Mapping:</h3>
        <p className="leading-relaxed text-gray-700 mb-4">
          Each letter in the alphabet is replaced as follows:
        </p>
        
        <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto text-sm font-mono">
          <table className="min-w-full">
            <tbody>
              {Object.entries(cipher).reduce((rows: React.ReactNode[], [key, value], index) => {
                if (index % 5 === 0) rows.push([]);
                const currentRow = rows[rows.length - 1] as React.ReactNode[];
                currentRow.push(
                  <tr key={key} className="hover:bg-gray-200">
                    <td className="py-1 px-3 text-right font-semibold">{key}:</td>
                    <td className="py-1 px-3">"{value}"</td>
                  </tr>
                );
                return rows;
              }, []).map((rowContent, rowIndex) => (
                <tr key={rowIndex} className="border-b border-gray-200 last:border-0">
                  <td className="py-1">
                    <table className="w-full">
                      <tbody>{rowContent}</tbody>
                    </table>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-gray-700">
          <p><strong>Spaces:</strong> Replaced with <code className="bg-gray-200 px-1 rounded">--</code></p>
          <p><strong>Others:</strong> Remain unchanged</p>
        </div>
      </div>
    </div>
  );
};

export default Instructions;