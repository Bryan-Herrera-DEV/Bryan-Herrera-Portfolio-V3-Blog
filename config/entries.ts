export interface Post {
  title: string;
  slug?: string;
  date: Date;
}

export const entries: Post[] = [
  {
    title: 'Cloud blog: Setting up an Angular 11 blog in the AWS Cloud',
    date: new Date('2021-01-27'),
  }
];
