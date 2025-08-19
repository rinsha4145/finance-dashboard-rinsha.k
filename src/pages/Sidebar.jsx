
import { 
  User, 
  Tag, 
  FileText,
  X,
  ChevronUp,
} from 'lucide-react';


export default function Sidebar ({ isOpen, onClose, activeBar, setActiveBar })  {
  const sidebarItems = [
    { icon: User, label: 'dashboard', key: 'dashboard', active: activeBar === 'dashboard' },
    { icon: Tag, label: 'Transaction', key: 'transactions', active: activeBar === 'transactions' },
    { icon: FileText, label: 'reports', key: 'reports', active: activeBar === 'reports' }
  ];

  const handleNavClick = (key) => {
    setActiveBar(key);
    if (onClose) onClose(); 
  };

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed lg:static lg:translate-x-0 z-50
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
        transition-transform duration-300 ease-in-out
        w-80 bg-white border-r border-gray-200 flex flex-col h-full
      `}>
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
                <div className="w-4 h-4 border-2 border-white rounded-sm"></div>
              </div>
              <span className="text-xl font-semibold text-gray-900">Finance-Dashboard</span>
            </div>
            <button 
              onClick={onClose}
              className="lg:hidden p-1 hover:bg-gray-100 rounded"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          {/* User Profile */}
          <div className="mt-6 flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
            <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
              <span className="text-white font-medium text-sm">KD</span>
            </div>
            <div className="flex-1">
              <p className="font-medium text-gray-900">Kevin Dukkon</p>
              <p className="text-sm text-gray-500">hey@kevdu.co</p>
            </div>
            <ChevronUp className="w-4 h-4 text-gray-400" />
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-1">
          {sidebarItems.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavClick(item.key)}
              className={`
                w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium
                transition-colors duration-150 text-left
                ${item.active 
                  ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
              `}
            >
              <item.icon className="w-5 h-5" />
              <span>{item.label}</span>
            </button>
          ))}
        </nav>
      </div>
    </>
  );
};
