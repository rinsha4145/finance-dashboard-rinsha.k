import { Eye} from 'lucide-react';
export default function Dashboard  () {
  return (
    <>
      <div className="space-y-6">
        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Available Balance Card */}
          <div className="bg-gray-900 text-white rounded-2xl p-6 lg:col-span-1">
            <div className="space-y-4">
              <p className="text-gray-300 text-sm">Available Balance</p>
              <p className="text-3xl font-bold">$1,453.43</p>
              <div className="flex items-center justify-between pt-4">
                <button className="flex items-center space-x-2 text-gray-300 hover:text-white transition-colors">
                  <Eye className="w-4 h-4" />
                  <span className="text-sm">View more</span>
                </button>
                <span className="text-gray-400 text-sm">** 1938</span>
              </div>
            </div>
          </div>

          
        </div>

       
      </div>
    </>
  );
};