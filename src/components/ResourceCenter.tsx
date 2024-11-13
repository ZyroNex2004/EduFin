import React, { useState } from 'react';
import { BookOpen, Video, FileText, Award, ChevronRight, Play, Download } from 'lucide-react';

interface Resource {
  title: string;
  description: string;
  icon: any;
  type: string;
  content?: string;
  videoUrl?: string;
  downloadUrl?: string;
}

export default function ResourceCenter() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null);

  const resources: Resource[] = [
    {
      title: "Understanding Student Loans",
      description: "Learn the basics of federal and private student loans",
      icon: BookOpen,
      type: "Article",
      content: `Student loans can be a crucial tool for financing your education, but it's important to understand how they work. There are two main types of student loans:

1. Federal Student Loans
- Offered by the government
- Generally have lower interest rates
- More flexible repayment options
- May be subsidized or unsubsidized

2. Private Student Loans
- Offered by banks and other financial institutions
- Interest rates vary based on credit score
- May require a cosigner
- Less flexible repayment terms`
    },
    {
      title: "Budgeting 101",
      description: "Master the fundamentals of personal budgeting",
      icon: Video,
      type: "Video",
      videoUrl: "https://www.youtube.com/embed/example"
    },
    {
      title: "Scholarship Guide",
      description: "Tips for finding and applying to scholarships",
      icon: Award,
      type: "Guide",
      downloadUrl: "/guides/scholarship-guide.pdf"
    },
    {
      title: "Financial Terms Glossary",
      description: "Common financial terms explained",
      icon: FileText,
      type: "Reference",
      content: `APR (Annual Percentage Rate): The yearly interest rate on a loan
Credit Score: A number that represents your creditworthiness
Deferment: Temporary postponement of loan payments
FAFSA: Free Application for Federal Student Aid
Grace Period: Time after graduation before loan payments begin`
    }
  ];

  const ResourceContent = ({ resource }: { resource: Resource }) => {
    switch (resource.type) {
      case 'Article':
      case 'Reference':
        return (
          <div className="prose max-w-none">
            <p className="whitespace-pre-line">{resource.content}</p>
          </div>
        );
      case 'Video':
        return (
          <div className="aspect-video bg-gray-100 rounded-lg flex items-center justify-center">
            <Play className="w-12 h-12 text-blue-600" />
          </div>
        );
      case 'Guide':
        return (
          <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700">
            <Download className="w-4 h-4" />
            Download Guide
          </button>
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Resource Center</h2>
      
      {selectedResource ? (
        <div>
          <button
            onClick={() => setSelectedResource(null)}
            className="flex items-center gap-1 text-blue-600 hover:text-blue-700 mb-4"
          >
            ← Back to resources
          </button>
          
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">{selectedResource.title}</h3>
            <p className="text-gray-600 mb-4">{selectedResource.description}</p>
            <ResourceContent resource={selectedResource} />
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((resource, index) => (
            <div
              key={index}
              onClick={() => setSelectedResource(resource)}
              className="group p-4 border border-gray-200 rounded-lg hover:border-blue-500 transition-all duration-200 cursor-pointer"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 bg-blue-100 rounded-lg group-hover:bg-blue-200 transition-colors duration-200">
                  <resource.icon className="w-6 h-6 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-800 mb-1">{resource.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-medium px-2 py-1 bg-gray-100 rounded-full">
                      {resource.type}
                    </span>
                    <ChevronRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}