import React from 'react';
import { BookOpen, Shield, Globe } from 'lucide-react';

const Learn: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto p-4 space-y-8 animate-fadeIn">
      <div className="bg-white rounded-xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-transparent bg-clip-text">
          Understanding Nioga TXT
        </h1>

        {/* How Nioga Cipher Works */}
        <div className="mb-12 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-indigo-100 rounded-lg">
              <BookOpen className="w-6 h-6 text-indigo-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">How the Nioga Cipher Works</h2>
              <p className="text-gray-600 leading-relaxed">
                The Nioga cipher is a substitution cipher that replaces each letter with a unique mathematical or Greek symbol. 
                Unlike traditional ciphers that use simple letter shifts, Nioga uses distinct symbols that make the encoded text 
                appear more complex while maintaining a straightforward encoding/decoding process.
              </p>
              <div className="mt-4 p-4 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500">
                  Example: "HELLO" → "Π∠ΓΓ∤"<br />
                  Each letter is consistently replaced with its corresponding symbol, making it reversible.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Cybersecurity Importance */}
        <div className="mb-12 space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-purple-100 rounded-lg">
              <Shield className="w-6 h-6 text-purple-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Why Ciphers Matter in Cybersecurity</h2>
              <p className="text-gray-600 leading-relaxed">
                Ciphers are fundamental to modern cybersecurity, forming the basis of encryption systems that protect:
              </p>
              <ul className="mt-3 space-y-2 list-disc list-inside text-gray-600">
                <li>Personal communications</li>
                <li>Financial transactions</li>
                <li>Sensitive data storage</li>
                <li>Online privacy</li>
              </ul>
              <p className="mt-3 text-gray-600">
                While Nioga is a simple educational cipher, it demonstrates the basic principles that more complex 
                encryption systems build upon.
              </p>
            </div>
          </div>
        </div>

        {/* Real-world Applications */}
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <div className="p-3 bg-emerald-100 rounded-lg">
              <Globe className="w-6 h-6 text-emerald-600" />
            </div>
            <div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">Real-world Uses of Encoding</h2>
              <p className="text-gray-600 leading-relaxed">
                Encoding and encryption are everywhere in our digital world:
              </p>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Communication</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Secure messaging apps</li>
                    <li>• Email encryption</li>
                    <li>• VPN services</li>
                  </ul>
                </div>
                <div className="p-4 bg-gray-50 rounded-lg">
                  <h3 className="font-semibold text-gray-700 mb-2">Data Protection</h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Password storage</li>
                    <li>• File encryption</li>
                    <li>• Secure backups</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Learn;