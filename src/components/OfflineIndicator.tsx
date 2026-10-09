/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';
import { WifiOff } from 'lucide-react';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 rounded-full bg-amber-600 px-4 py-2 text-xs font-bold text-white shadow-lg animate-bounce">
      <WifiOff className="h-4 w-4" />
      <span>Offline Mode — All data is safely stored on this phone</span>
    </div>
  );
};
