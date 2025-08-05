import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { 
  MapPin, 
  Clock, 
  DollarSign, 
  Users, 
  Briefcase, 
  Heart,
  Star,
  Award,
  Coffee,
  Zap,
  Target,
  Globe,
  TrendingUp,
  Search,
  Filter
} from 'lucide-react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'remote';
  salary: string;
  experience: string;
  description: string;
  requirements: string[];
  benefits: string[];
  featured: boolean;
}

const mockJobs: JobListing[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    department: 'Engineering',
    location: 'San Francisco, CA',
    type: 'full-time',
    salary: '$120,000 - $160,000',
    experience: '5+ years',
    description: 'Join our frontend team to build amazing user experiences for SafariDesk. You\'ll work with React, TypeScript, and modern web technologies.',
    requirements: [
      '5+ years of frontend development experience',
      'Expert knowledge of React and TypeScript',
      'Experience with modern CSS frameworks',
      'Strong understanding of web performance optimization',
      'Experience with testing frameworks'
    ],
    benefits: [
      'Health, dental, and vision insurance',
      'Flexible work hours',
      'Remote work options',
      '$5,000 learning budget',
      'Stock options'
    ],
    featured: true
  },
  {
    id: '2',
    title: 'Product Manager',
    department: 'Product',
    location: 'New York, NY',
    type: 'full-time',
    salary: '$140,000 - $180,000',
    experience: '3+ years',
    description: 'Drive product strategy and roadmap for SafariDesk. Work closely with engineering, design, and marketing teams to deliver exceptional products.',
    requirements: [
      '3+ years of product management experience',
      'Experience with SaaS products',
      'Strong analytical and problem-solving skills',
      'Excellent communication and leadership skills',
      'Experience with agile development methodologies'
    ],
    benefits: [
      'Comprehensive health coverage',
      'Unlimited PTO',
      'Home office stipend',
      'Professional development budget',
      'Equity participation'
    ],
    featured: true
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    department: 'Design',
    location: 'Remote',
    type: 'full-time',
    salary: '$90,000 - $120,000',
    experience: '2+ years',
    description: 'Create beautiful, intuitive interfaces that delight our users. Work on the entire design process from research to implementation.',
    requirements: [
      '2+ years of UX/UI design experience',
      'Proficiency in Figma and design systems',
      'Strong portfolio showcasing web and mobile designs',
      'Understanding of user-centered design principles',
      'Experience with design research and testing'
    ],
    benefits: [
      'Full health benefits',
      'Flexible schedule',
      '100% remote work',
      'Design tool subscriptions',
      'Conference attendance'
    ],
    featured: false
  },
  {
    id: '4',
    title: 'DevOps Engineer',
    department: 'Engineering',
    location: 'Austin, TX',
    type: 'full-time',
    salary: '$110,000 - $150,000',
    experience: '4+ years',
    description: 'Build and maintain our infrastructure to ensure SafariDesk scales reliably. Work with cloud technologies and automation tools.',
    requirements: [
      '4+ years of DevOps/SRE experience',
      'Experience with AWS, Docker, and Kubernetes',
      'Strong scripting skills (Python, Bash)',
      'Experience with CI/CD pipelines',
      'Knowledge of monitoring and logging tools'
    ],
    benefits: [
      'Premium healthcare',
      'Flexible work arrangements',
      'Technology allowance',
      'Learning stipend',
      'Stock options'
    ],
    featured: false
  },
  {
    id: '5',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'Los Angeles, CA',
    type: 'full-time',
    salary: '$70,000 - $95,000',
    experience: '2+ years',
    description: 'Help our customers succeed with SafariDesk. Build relationships, provide support, and drive customer satisfaction and retention.',
    requirements: [
      '2+ years of customer success experience',
      'Excellent communication skills',
      'Experience with SaaS platforms',
      'Strong problem-solving abilities',
      'Customer-focused mindset'
    ],
    benefits: [
      'Health and wellness benefits',
      'Hybrid work model',
      'Professional development',
      'Team outings',
      'Performance bonuses'
    ],
    featured: false
  }
];

const departmentColors = {
  'Engineering': 'bg-blue-100 text-blue-800',
  'Product': 'bg-purple-100 text-purple-800',
  'Design': 'bg-pink-100 text-pink-800',
  'Customer Success': 'bg-green-100 text-green-800',
  'Marketing': 'bg-yellow-100 text-yellow-800',
  'Sales': 'bg-orange-100 text-orange-800'
};

const typeColors = {
  'full-time': 'bg-green-100 text-green-800',
  'part-time': 'bg-yellow-100 text-yellow-800',
  'contract': 'bg-blue-100 text-blue-800',
  'remote': 'bg-purple-100 text-purple-800'
};

export default function Career() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [showJobDetails, setShowJobDetails] = useState<string | null>(null);

  const filteredJobs = mockJobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment = selectedDepartment === 'all' || job.department === selectedDepartment;
    const matchesType = selectedType === 'all' || job.type === selectedType;
    
    return matchesSearch && matchesDepartment && matchesType;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-600 to-purple-700 text-white py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Join Our Team
              </h1>
              <p className="text-xl mb-8 text-blue-100">
                Help us build the future of team productivity. Work with passionate people on 
                meaningful problems that impact millions of users worldwide.
              </p>
              <div className="flex flex-wrap justify-center gap-8 text-blue-100">
                <div className="flex items-center gap-2">
                  <Users className="h-5 w-5" />
                  <span>50+ team members</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe className="h-5 w-5" />
                  <span>Remote-first culture</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-5 w-5" />
                  <span>Fast-growing startup</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Work at SafariDesk?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We're building more than just software - we're creating a workplace where 
                everyone can do their best work and grow their careers.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Heart className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-600 text-sm">
                  Flexible hours, unlimited PTO, and remote work options to help you thrive.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Growth Opportunities</h3>
                <p className="text-gray-600 text-sm">
                  Learning budgets, mentorship programs, and clear career progression paths.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Amazing Team</h3>
                <p className="text-gray-600 text-sm">
                  Work alongside talented, passionate people who care about what they do.
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="h-8 w-8 text-yellow-600" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Impact</h3>
                <p className="text-gray-600 text-sm">
                  Your work directly impacts millions of users and shapes the future of productivity.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Job Search and Filters */}
        <section className="py-8 bg-gray-100 border-b">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row gap-4 items-center">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="Search jobs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              
              <div className="flex gap-4">
                <Select value={selectedDepartment} onValueChange={setSelectedDepartment}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Departments" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Departments</SelectItem>
                    <SelectItem value="Engineering">Engineering</SelectItem>
                    <SelectItem value="Product">Product</SelectItem>
                    <SelectItem value="Design">Design</SelectItem>
                    <SelectItem value="Customer Success">Customer Success</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Sales">Sales</SelectItem>
                  </SelectContent>
                </Select>

                <Select value={selectedType} onValueChange={setSelectedType}>
                  <SelectTrigger className="w-48">
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="full-time">Full Time</SelectItem>
                    <SelectItem value="part-time">Part Time</SelectItem>
                    <SelectItem value="contract">Contract</SelectItem>
                    <SelectItem value="remote">Remote</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12">
          <div className="container mx-auto px-6">
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Open Positions</h2>
              <p className="text-gray-600">
                {filteredJobs.length} {filteredJobs.length === 1 ? 'position' : 'positions'} available
              </p>
            </div>

            {filteredJobs.length === 0 ? (
              <div className="text-center py-12">
                <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">No positions found matching your criteria.</p>
              </div>
            ) : (
              <div className="space-y-6">
                {filteredJobs.map((job) => (
                  <Card key={job.id} className={`transition-all hover:shadow-lg ${job.featured ? 'ring-2 ring-blue-200' : ''}`}>
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                            {job.featured && (
                              <Badge className="bg-yellow-100 text-yellow-800">
                                <Star className="h-3 w-3 mr-1" />
                                Featured
                              </Badge>
                            )}
                          </div>
                          
                          <div className="flex flex-wrap items-center gap-4 text-gray-600 mb-3">
                            <div className="flex items-center gap-1">
                              <Briefcase className="h-4 w-4" />
                              <Badge className={departmentColors[job.department as keyof typeof departmentColors]} variant="secondary">
                                {job.department}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4" />
                              <span className="text-sm">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <Badge className={typeColors[job.type]} variant="secondary">
                                {job.type.replace('-', ' ')}
                              </Badge>
                            </div>
                            <div className="flex items-center gap-1">
                              <DollarSign className="h-4 w-4" />
                              <span className="text-sm">{job.salary}</span>
                            </div>
                          </div>

                          <p className="text-gray-600 mb-4">{job.description}</p>
                          
                          <div className="flex items-center gap-2 text-sm text-gray-500">
                            <Award className="h-4 w-4" />
                            <span>{job.experience} experience required</span>
                          </div>
                        </div>

                        <div className="mt-4 lg:mt-0 lg:ml-6 flex flex-col gap-2">
                          <Button 
                            onClick={() => setShowJobDetails(showJobDetails === job.id ? null : job.id)}
                            variant="outline"
                          >
                            {showJobDetails === job.id ? 'Hide Details' : 'View Details'}
                          </Button>
                          <Button>
                            Apply Now
                          </Button>
                        </div>
                      </div>

                      {/* Job Details Expansion */}
                      {showJobDetails === job.id && (
                        <div className="mt-6 pt-6 border-t">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold mb-3">Requirements</h4>
                              <ul className="space-y-2">
                                {job.requirements.map((req, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-600">{req}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            
                            <div>
                              <h4 className="font-semibold mb-3">Benefits</h4>
                              <ul className="space-y-2">
                                {job.benefits.map((benefit, index) => (
                                  <li key={index} className="flex items-start gap-2">
                                    <div className="h-1.5 w-1.5 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                                    <span className="text-sm text-gray-600">{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Perks & Benefits</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                We believe in taking care of our team with comprehensive benefits and perks 
                that support your health, happiness, and career growth.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-lg">
                <Heart className="h-8 w-8 text-blue-600 mb-3" />
                <h3 className="font-semibold mb-2">Health & Wellness</h3>
                <p className="text-gray-600 text-sm">
                  Comprehensive health, dental, and vision insurance. Mental health support and wellness stipends.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <Coffee className="h-8 w-8 text-green-600 mb-3" />
                <h3 className="font-semibold mb-2">Work-Life Balance</h3>
                <p className="text-gray-600 text-sm">
                  Unlimited PTO, flexible hours, remote work options, and sabbatical opportunities.
                </p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <TrendingUp className="h-8 w-8 text-purple-600 mb-3" />
                <h3 className="font-semibold mb-2">Professional Growth</h3>
                <p className="text-gray-600 text-sm">
                  $5,000 annual learning budget, conference attendance, and mentorship programs.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <DollarSign className="h-8 w-8 text-yellow-600 mb-3" />
                <h3 className="font-semibold mb-2">Financial Benefits</h3>
                <p className="text-gray-600 text-sm">
                  Competitive salaries, equity participation, 401(k) matching, and performance bonuses.
                </p>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <Zap className="h-8 w-8 text-red-600 mb-3" />
                <h3 className="font-semibold mb-2">Tech & Equipment</h3>
                <p className="text-gray-600 text-sm">
                  Latest MacBooks, monitors, ergonomic setups, and home office stipends.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <Users className="h-8 w-8 text-indigo-600 mb-3" />
                <h3 className="font-semibold mb-2">Team Culture</h3>
                <p className="text-gray-600 text-sm">
                  Team retreats, social events, lunch & learns, and collaborative workspaces.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-700 text-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">Don't See the Right Role?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              We're always looking for talented people to join our team. Send us your resume 
              and let us know how you'd like to contribute to SafariDesk's mission.
            </p>
            <Button variant="outline" className="bg-white text-blue-600 hover:bg-gray-100">
              Send Your Resume
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
