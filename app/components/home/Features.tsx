import { Scissors, Wand2, Share2, Cloud } from 'lucide-react';

const features = [
  {
    icon: Scissors,
    title: 'Precise Editing',
    description: 'Professional-grade editing tools for frame-perfect cuts and transitions.'
  },
  {
    icon: Wand2,
    title: 'Smart Effects',
    description: 'One-click filters and effects to enhance your videos instantly.'
  },
  {
    icon: Share2,
    title: 'Easy Sharing',
    description: 'Share your creations directly to social media platforms.'
  },
  {
    icon: Cloud,
    title: 'Cloud Storage',
    description: 'Secure cloud storage for all your projects and assets.'
  }
];

export default function Features() {
  return (
    <section className="py-20 bg-accent/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          Everything you need to create amazing videos
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 bg-background rounded-lg shadow-sm hover:shadow-md transition-shadow"
            >
              <feature.icon className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 