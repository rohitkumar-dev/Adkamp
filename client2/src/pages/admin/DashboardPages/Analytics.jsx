import {Link} from 'react-router-dom'

const Analytics = () => {
  return (
    <div className="">
      <h1 className="text-2xl font-bold">Analytics</h1>
      <p className="text-gray-600 mt-2">After clicking login with registered account only.</p>

<div className="w-full h-20 flex justify-center items-center">
      <button className="bg-amber-600 text-white p-3 rounded-2xl"><Link to="https://analytics.google.com/">View Analytics</Link></button>
    </div>
    </div>
  );
};

export default Analytics;
