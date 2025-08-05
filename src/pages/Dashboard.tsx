import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  Calendar, 
  Clock, 
  Users, 
  CheckCircle, 
  TrendingUp, 
  BarChart3, 
  Target,
  Plus,
  Search,
  Filter,
  MoreVertical,
  Bell,
  Settings,
  User,
  LogOut
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface Task {
  id: string;
  title: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  assignee: string;
  project: string;
}

interface Project {
  id: string;
  name: string;
  progress: number;
  tasksTotal: number;
  tasksCompleted: number;
  dueDate: string;
  team: string[];
}

const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Update homepage design',
    status: 'in-progress',
    priority: 'high',
    dueDate: '2024-03-20',
    assignee: 'Sarah Johnson',
    project: 'Website Redesign'
  },
  {
    id: '2',
    title: 'Review marketing campaign',
    status: 'todo',
    priority: 'medium',
    dueDate: '2024-03-22',
    assignee: 'Mike Chen',
    project: 'Q1 Marketing'
  },
  {
    id: '3',
    title: 'Fix login bug',
    status: 'completed',
    priority: 'high',
    dueDate: '2024-03-18',
    assignee: 'Alex Smith',
    project: 'Bug Fixes'
  },
  {
    id: '4',
    title: 'Prepare presentation slides',
    status: 'todo',
    priority: 'low',
    dueDate: '2024-03-25',
    assignee: 'Emily Davis',
    project: 'Client Meeting'
  }
];

const mockProjects: Project[] = [
  {
    id: '1',
    name: 'Website Redesign',
    progress: 75,
    tasksTotal: 12,
    tasksCompleted: 9,
    dueDate: '2024-04-15',
    team: ['SJ', 'MC', 'AS']
  },
  {
    id: '2',
    name: 'Q1 Marketing Campaign',
    progress: 45,
    tasksTotal: 8,
    tasksCompleted: 3,
    dueDate: '2024-03-30',
    team: ['ED', 'MC']
  },
  {
    id: '3',
    name: 'Mobile App Development',
    progress: 90,
    tasksTotal: 15,
    tasksCompleted: 13,
    dueDate: '2024-05-01',
    team: ['AS', 'SJ', 'ED']
  }
];

const priorityColors = {
  high: 'bg-red-100 text-red-800',
  medium: 'bg-yellow-100 text-yellow-800',
  low: 'bg-green-100 text-green-800'
};

const statusColors = {
  'todo': 'bg-gray-100 text-gray-800',
  'in-progress': 'bg-blue-100 text-blue-800',
  'completed': 'bg-green-100 text-green-800'
};

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState('');

  // Mock user data
  const user = {
    name: 'John Doe',
    email: 'john.doe@company.com',
    avatar: '',
    role: 'Project Manager'
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Dashboard Header */}
        <div className="bg-white border-b">
          <div className="container mx-auto px-6 py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  Welcome back, {user.name}! 👋
                </h1>
                <p className="text-gray-600 mt-1">
                  Here's what's happening with your projects today
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Button variant="outline" size="sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  Today
                </Button>
                <Button size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  New Task
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <section className="container mx-auto px-6 py-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Total Tasks</p>
                    <p className="text-2xl font-bold text-gray-900">24</p>
                  </div>
                  <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="h-6 w-6 text-blue-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+12% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Completed</p>
                    <p className="text-2xl font-bold text-gray-900">18</p>
                  </div>
                  <div className="h-12 w-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-green-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <TrendingUp className="h-4 w-4 text-green-500 mr-1" />
                  <span className="text-sm text-green-600">+8% from last week</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">In Progress</p>
                    <p className="text-2xl font-bold text-gray-900">6</p>
                  </div>
                  <div className="h-12 w-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-yellow-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-gray-600">2 due today</span>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">Team Members</p>
                    <p className="text-2xl font-bold text-gray-900">8</p>
                  </div>
                  <div className="h-12 w-12 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-purple-600" />
                  </div>
                </div>
                <div className="mt-4 flex items-center">
                  <span className="text-sm text-gray-600">3 active projects</span>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Recent Tasks */}
              <Card>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <CardTitle>Recent Tasks</CardTitle>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                        <Input
                          placeholder="Search tasks..."
                          value={searchTerm}
                          onChange={(e) => setSearchTerm(e.target.value)}
                          className="pl-10 w-64"
                        />
                      </div>
                      <Button variant="outline" size="sm">
                        <Filter className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {mockTasks.map((task) => (
                      <div key={task.id} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50">
                        <div className="flex items-center gap-3">
                          <div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="h-4 w-4 text-gray-500" />
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">{task.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Badge className={priorityColors[task.priority]} variant="secondary">
                                {task.priority}
                              </Badge>
                              <Badge className={statusColors[task.status]} variant="secondary">
                                {task.status.replace('-', ' ')}
                              </Badge>
                              <span className="text-xs text-gray-500">{task.project}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-sm text-gray-500">{task.dueDate}</span>
                          <Button variant="ghost" size="sm">
                            <MoreVertical className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Projects Overview */}
              <Card>
                <CardHeader>
                  <CardTitle>Active Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {mockProjects.map((project) => (
                      <div key={project.id} className="border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="font-semibold text-gray-900">{project.name}</h3>
                          <div className="flex items-center gap-1">
                            {project.team.map((member, index) => (
                              <Avatar key={index} className="h-6 w-6">
                                <AvatarFallback className="text-xs">{member}</AvatarFallback>
                              </Avatar>
                            ))}
                          </div>
                        </div>
                        <div className="mb-2">
                          <div className="flex items-center justify-between text-sm text-gray-600 mb-1">
                            <span>Progress</span>
                            <span>{project.progress}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                              style={{ width: `${project.progress}%` }}
                            ></div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>{project.tasksCompleted}/{project.tasksTotal} tasks completed</span>
                          <span>Due {project.dueDate}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Actions */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Actions</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full justify-start" variant="outline">
                    <Plus className="h-4 w-4 mr-2" />
                    Create New Task
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Calendar className="h-4 w-4 mr-2" />
                    Schedule Meeting
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <Users className="h-4 w-4 mr-2" />
                    Invite Team Member
                  </Button>
                  <Button className="w-full justify-start" variant="outline">
                    <BarChart3 className="h-4 w-4 mr-2" />
                    View Reports
                  </Button>
                </CardContent>
              </Card>

              {/* Upcoming Deadlines */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Deadlines</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Website Redesign</p>
                        <p className="text-sm text-gray-600">Final review</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-red-600">2 days</p>
                        <p className="text-xs text-gray-500">Mar 20</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Marketing Campaign</p>
                        <p className="text-sm text-gray-600">Launch preparation</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-yellow-600">5 days</p>
                        <p className="text-xs text-gray-500">Mar 25</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-gray-900">Client Presentation</p>
                        <p className="text-sm text-gray-600">Slide preparation</p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-medium text-green-600">1 week</p>
                        <p className="text-xs text-gray-500">Mar 28</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-green-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Task completed</p>
                        <p className="text-xs text-gray-600">Fix login bug - 2 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-blue-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">New comment</p>
                        <p className="text-xs text-gray-600">On Website Redesign - 4 hours ago</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="h-2 w-2 bg-purple-500 rounded-full mt-2"></div>
                      <div>
                        <p className="text-sm font-medium">Team member added</p>
                        <p className="text-xs text-gray-600">Sarah joined Q1 Marketing - 1 day ago</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
