import dynamic from 'next/dynamic';

const DynamicDraggableList = dynamic(() => import('../app/components/DraggableList'), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
      
      <DynamicDraggableList />
    </div>
  );
}

