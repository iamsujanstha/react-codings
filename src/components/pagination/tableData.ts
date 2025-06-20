import subscriptionsData from '../../mocks/subscriptions.json';
import usersData from '../../mocks/users.json';


export type SubscriptionPlan = 'Plan 1' | 'Plan 2' | 'Plan3' | 'Plan 6' | 'Plan 12' | 'Plan Unlimited';

export interface Subscription {
  id: number;
  user_id: string;
  package: SubscriptionPlan;
  expires_on: string;
}

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  active: string;
  country: string;
  join_date: string;
}

export interface Subscriber {
  id: string;
  name: string;
  email: string;
  plan: SubscriptionPlan;
  status: 'Active' | 'Expired';
  expiresOn: Date;
  joinDate: Date;
  country: string;
}

export const getCombinedSubscribers = (): Subscriber[] => {
  const subscriptions: Subscription[] = subscriptionsData.map(sub => ({
    ...sub,
    package: sub.package as SubscriptionPlan
  }));
  const users: User[] = usersData;

  return subscriptions.map(sub => {
    const user = users.find(u => u.id === Number(sub.user_id));
    const expiresOn = new Date(sub.expires_on);
    const status = user?.active ? 'Active' : 'Expired';
    const joinDate = (() => {
      const ts = Number(user?.join_date);
      return isNaN(ts) ? new Date() : new Date(ts * 1000);
    })();


    return {
      id: sub.id.toString(),
      name: user ? `${user.first_name} ${user.last_name}` : `User ${sub.user_id}`,
      email: user?.email || 'unknown@example.com',
      plan: sub.package,
      status,
      expiresOn,
      joinDate,
      country: user?.country || 'Unknown'
    };
  });
};

export const SubscriberListCols = [
  { label: 'USER', field: 'name' },
  { label: 'EMAIL', field: 'email' },
  { label: 'PLAN', field: 'plan' },
  { label: 'STATUS', field: 'status' },
  { label: 'EXPIRES ON', field: 'expiresOn' },
  { label: 'JOIN DATE', field: 'joinDate' },
  { label: 'COUNTRY', field: 'country' }
]
