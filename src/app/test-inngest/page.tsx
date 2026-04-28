'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function TestInngestPage() {
  const [prompt, setPrompt] = useState('');
  const [result, setResult] = useState<any>(null);
  const [loading, setLoading] = useState(false);

  const triggerInngest = async () => {
    if (!prompt.trim()) return;
    
    setLoading(true);
    try {
      const response = await fetch('/api/inngest', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: 'test/hello.world',
          data: {
            value: prompt
          }
        }),
      });
      
      const data = await response.json();
      setResult(data);
    } catch (error) {
      console.error('Error triggering Inngest:', error);
      setResult({ error: 'Failed to trigger function' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-6 max-w-4xl">
      <Card>
        <CardHeader>
          <CardTitle>Test Inngest Function</CardTitle>
          <CardDescription>
            Enter a prompt to create something with the AI agent
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex gap-2">
            <Input
              placeholder="e.g., creates a todo app with drag and drop"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="flex-1"
            />
            <Button 
              onClick={triggerInngest} 
              disabled={loading || !prompt.trim()}
            >
              {loading ? 'Creating...' : 'Create'}
            </Button>
          </div>
          
          {result && (
            <Card>
              <CardHeader>
                <CardTitle>Result</CardTitle>
              </CardHeader>
              <CardContent>
                {result.error ? (
                  <p className="text-red-500">{result.error}</p>
                ) : (
                  <div className="space-y-2">
                    {result.url && (
                      <div>
                        <strong>Sandbox URL:</strong>{' '}
                        <a 
                          href={result.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          {result.url}
                        </a>
                      </div>
                    )}
                    {result.summary && (
                      <div>
                        <strong>Summary:</strong>
                        <pre className="mt-2 p-2 bg-gray-100 rounded text-sm whitespace-pre-wrap">
                          {result.summary}
                        </pre>
                      </div>
                    )}
                    {result.files && (
                      <div>
                        <strong>Files Created:</strong>
                        <pre className="mt-2 p-2 bg-gray-100 rounded text-sm">
                          {JSON.stringify(result.files, null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>
    </div>
  );
}