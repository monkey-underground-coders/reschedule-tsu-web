import Index from "#/scenes/Index";

export interface AppRoute {
  exact?: boolean;
  path: string;
  component: any;
  render?: any;
}

export const routes: AppRoute[] = [
  {
    exact: true,
    path: "/",
    component: Index,
  },
  {
    exact: true,
    path: "/groups",
    component: Index,
  },
];
