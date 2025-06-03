import { Loader2 } from 'lucide-react';

export default function Loader() {
  return (
    <div className="min-h-[200px] flex items-center justify-center" role="status">
      <Loader2 className="w-8 h-8 animate-spin text-primary" />
      <span className="sr-only">Loading...</span>
    </div>
  );
}