import React from 'react';
import { useAuth } from '../hooks/useAuth';
import UserStack from './UserNavigation';
import AuthStack from './AuthNavigation';

export default function RootNavigation() {
  const { user } = useAuth();

  return user ? <UserStack /> : <AuthStack />;
}