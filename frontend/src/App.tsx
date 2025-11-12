import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './components/ui/card';
import { Button } from './components/ui/button';
import { Badge } from './components/ui/badge';
import { Separator } from './components/ui/separator';
import { Heart, Star, Users, Zap } from 'lucide-react';

export const App = () => {
    const [likeCount, setLikeCount] = useState(42);
    const [isLiked, setIsLiked] = useState(false);

    const handleLike = () => {
        setIsLiked(!isLiked);
        setLikeCount(prev => isLiked ? prev - 1 : prev + 1);
    };

    return (
        <div className="min-h-screen bg-background">
            {/* Header */}
            <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container mx-auto px-4 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Zap className="h-6 w-6 text-primary" />
                        <h1 className="text-xl font-bold">SimpleApp</h1>
                    </div>
                    <Badge variant="secondary">v1.0</Badge>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="max-w-4xl mx-auto space-y-8">
                    {/* Welcome Section */}
                    <div className="text-center space-y-4">
                        <h2 className="text-4xl font-bold tracking-tight">Welcome to SimpleApp</h2>
                        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                            A beautiful single-page application built with React 19, TypeScript, and Shadcn/UI
                        </p>
                    </div>

                    <Separator />

                    {/* Interactive Cards Section */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Star className="h-5 w-5 text-yellow-500" />
                                    Features
                                </CardTitle>
                                <CardDescription>
                                    Built with modern technologies
                                </CardDescription>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2 text-sm">
                                    <li>• React 19 with hooks</li>
                                    <li>• TypeScript for type safety</li>
                                    <li>• Shadcn/UI components</li>
                                    <li>• Tailwind CSS v4</li>
                                    <li>• Responsive design</li>
                                </ul>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Users className="h-5 w-5 text-blue-500" />
                                    Community
                                </CardTitle>
                                <CardDescription>
                                    Join our growing community
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Active users</span>
                                    <Badge variant="outline">1,234</Badge>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm">Projects created</span>
                                    <Badge variant="outline">5,678</Badge>
                                </div>
                                <Button variant="outline" size="sm" className="w-full">
                                    Join Community
                                </Button>
                            </CardContent>
                        </Card>

                        <Card className="hover:shadow-lg transition-shadow">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <Heart className={`h-5 w-5 ${isLiked ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                                    Interactive Demo
                                </CardTitle>
                                <CardDescription>
                                    Try out the interactive features
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="text-center">
                                    <p className="text-2xl font-bold">{likeCount}</p>
                                    <p className="text-sm text-muted-foreground">likes</p>
                                </div>
                                <Button 
                                    onClick={handleLike}
                                    variant={isLiked ? "default" : "outline"}
                                    className="w-full"
                                >
                                    {isLiked ? "Liked!" : "Like this"}
                                </Button>
                            </CardContent>
                        </Card>
                    </div>

                    <Separator />

                    {/* Quick Actions */}
                    <div className="text-center space-y-4">
                        <h3 className="text-2xl font-semibold">Get Started</h3>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg">
                                Start Building
                            </Button>
                            <Button variant="outline" size="lg">
                                View Documentation
                            </Button>
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="border-t mt-16 py-8">
                <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
                    <p>Built with ❤️ using React 19, TypeScript, and Shadcn/UI</p>
                </div>
            </footer>
        </div>
    );
};
