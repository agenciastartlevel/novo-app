// Types para a plataforma Clipzone

export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  subscriptionStatus: 'active' | 'inactive' | 'trial';
  subscriptionPlan: 'basic' | 'pro' | 'premium';
  onboardingCompleted: boolean;
  createdAt: Date;
}

export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  videoUrl: string;
  duration: number;
  folderId: string;
  uploadedAt: Date;
  tags: string[];
}

export interface Folder {
  id: string;
  name: string;
  parentId: string | null;
  createdAt: Date;
  videoCount: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  modules: CourseModule[];
  progress: number;
  totalLessons: number;
  completedLessons: number;
}

export interface CourseModule {
  id: string;
  title: string;
  lessons: Lesson[];
  order: number;
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'text' | 'quiz';
  content: string;
  duration?: number;
  completed: boolean;
  order: number;
}

export interface Post {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  images?: string[];
  links?: string[];
  likes: number;
  comments: Comment[];
  createdAt: Date;
}

export interface Comment {
  id: string;
  authorId: string;
  authorName: string;
  authorAvatar?: string;
  content: string;
  createdAt: Date;
}

export interface Notification {
  id: string;
  type: 'video' | 'course' | 'community' | 'system';
  title: string;
  message: string;
  read: boolean;
  createdAt: Date;
  link?: string;
}

export interface NewsItem {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  image?: string;
  publishedAt: Date;
  category: string;
}
