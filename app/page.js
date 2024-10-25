'use client';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function HomePage() {
  const [count, setCount] = useState(0);

  return (
    <main className="min-h-screen p-8 bg-gray-100">
      <Card className="max-w-md mx-auto p-6 text-center">
        <h1 className="text-3xl font-bold mb-6 text-blue-600">Welcome to My Website!</h1>
        
        <div className="mb-6">
          <p className="text-lg mb-4">Click counter: {count}</p>
          <Button 
            onClick={() => setCount(count + 1)}
            className="mx-2"
          >
            Click me!
          </Button>
          <Button 
            onClick={() => setCount(0)}
            className="mx-2"
          >
            Reset
          </Button>
        </div>

        <p className="text-gray-600">
          Edit app/page.js to customize this page
        </p>
      </Card>
    </main>
  );
}