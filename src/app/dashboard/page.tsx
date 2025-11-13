'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Navbar from '@/components/custom/navbar';
import { Play, Download, BookOpen, Users, TrendingUp, Bell, Video, FolderOpen, Award, Clock } from 'lucide-react';
import Link from 'next/link';
import { authService } from '@/lib/auth';

export default function DashboardPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    checkAuth();
  }, []);

  const checkAuth = async () => {
    try {
      const currentUser = await authService.getCurrentUser();
      if (!currentUser) {
        router.push('/login');
        return;
      }
      setUser(currentUser);
    } catch (error) {
      router.push('/login');
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">Carregando...</p>
        </div>
      </div>
    );
  }

  const userName = user?.user_metadata?.full_name || user?.email?.split('@')[0] || 'Usuário';

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar userName={userName} userEmail={user?.email} />

      <main className="pt-24 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Welcome Section */}
          <div className="mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2">
              Olá, {userName}! 👋
            </h1>
            <p className="text-gray-600">
              Bem-vindo de volta ao Clipzone. Continue criando conteúdo incrível!
            </p>
          </div>

          {/* User Info Card */}
          <div className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-6 sm:p-8 mb-8 text-white">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div className="mb-4 sm:mb-0">
                <div className="flex items-center space-x-2 mb-2">
                  <Award className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wide">Conta Ativa</span>
                </div>
                <h2 className="text-2xl font-bold mb-1">Bem-vindo ao Clipzone!</h2>
                <p className="text-purple-100">Email: {user?.email}</p>
                <p className="text-purple-100 text-sm mt-2">ID: {user?.id}</p>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4">
                <p className="text-sm text-purple-100 mb-2">Próximas funcionalidades:</p>
                <ul className="text-sm space-y-1">
                  <li>✨ Biblioteca de Vídeos</li>
                  <li>📚 Cursos Exclusivos</li>
                  <li>👥 Comunidade Clipzone</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                  <Video className="w-6 h-6 text-purple-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">10k+</div>
              <div className="text-sm text-gray-600">Vídeos Disponíveis</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
                  <Download className="w-6 h-6 text-pink-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">Em breve</div>
              <div className="text-sm text-gray-600">Downloads</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">50+</div>
              <div className="text-sm text-gray-600">Cursos Premium</div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center justify-between mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-green-600" />
                </div>
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">5k+</div>
              <div className="text-sm text-gray-600">Criadores Ativos</div>
            </div>
          </div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column - Main Actions */}
            <div className="lg:col-span-2 space-y-6">
              {/* Quick Actions */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-6">Acesso Rápido</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <FolderOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Biblioteca de Vídeos</h3>
                    <p className="text-sm text-gray-600">Em desenvolvimento - Em breve!</p>
                  </div>

                  <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-50 to-pink-100 hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-pink-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Cursos</h3>
                    <p className="text-sm text-gray-600">Em desenvolvimento - Em breve!</p>
                  </div>

                  <div className="group p-6 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Comunidade</h3>
                    <p className="text-sm text-gray-600">Em desenvolvimento - Em breve!</p>
                  </div>

                  <div className="group p-6 rounded-xl bg-gradient-to-br from-green-50 to-green-100 hover:shadow-lg transition-all cursor-pointer">
                    <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <TrendingUp className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Feed de Notícias</h3>
                    <p className="text-sm text-gray-600">Em desenvolvimento - Em breve!</p>
                  </div>
                </div>
              </div>

              {/* Placeholder Info */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Próximas Funcionalidades</h2>
                </div>
                <div className="space-y-4">
                  <div className="p-4 bg-purple-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">📁 Biblioteca de Vídeos</h3>
                    <p className="text-sm text-gray-600">
                      Acesse milhares de vídeos organizados em pastas, com pré-visualização e download em lote.
                    </p>
                  </div>
                  <div className="p-4 bg-pink-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">🎓 Cursos Exclusivos</h3>
                    <p className="text-sm text-gray-600">
                      Aprenda técnicas profissionais de edição e estratégias de monetização.
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 rounded-xl">
                    <h3 className="font-semibold text-gray-900 mb-2">👥 Comunidade Clipzone</h3>
                    <p className="text-sm text-gray-600">
                      Conecte-se com outros criadores, compartilhe experiências e cresça junto.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Sidebar */}
            <div className="space-y-6">
              {/* Welcome Message */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-bold text-gray-900">Bem-vindo!</h2>
                  <Bell className="w-5 h-5 text-gray-400" />
                </div>
                <div className="space-y-4">
                  <p className="text-gray-700 leading-relaxed">
                    Você está logado e pronto para começar sua jornada como criador de conteúdo!
                  </p>
                  <div className="p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
                    <p className="text-sm text-gray-700 font-medium mb-2">
                      🎉 Conta criada com sucesso!
                    </p>
                    <p className="text-xs text-gray-600">
                      Estamos preparando funcionalidades incríveis para você. Fique ligado!
                    </p>
                  </div>
                </div>
              </div>

              {/* System Info */}
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-2xl p-6 text-white">
                <h2 className="text-xl font-bold mb-4">Sistema de Autenticação</h2>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Autenticação ativa</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Sessão segura (JWT)</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                    <span>Dados protegidos</span>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-white/20">
                  <p className="text-xs text-purple-100">
                    Sua conta está protegida com criptografia de ponta a ponta.
                  </p>
                </div>
              </div>

              {/* Quick Tips */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-900 mb-4">Dicas Rápidas</h2>
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 font-bold">1.</span>
                    <p>Complete seu perfil para aproveitar ao máximo a plataforma</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 font-bold">2.</span>
                    <p>Explore a biblioteca de vídeos quando disponível</p>
                  </div>
                  <div className="flex items-start space-x-2">
                    <span className="text-purple-600 font-bold">3.</span>
                    <p>Participe da comunidade e conecte-se com outros criadores</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
