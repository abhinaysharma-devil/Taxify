
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Services = () => {
  const services = [
    {
      title: "GST",
      subtitle: "What is GST in India?",
      description: "Comprehensive GST services for businesses of all sizes. From registration to filing returns, we handle all your GST requirements.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      whatWeDo: [
        "GST Registration & Migration",
        "Monthly/Quarterly Return Filing",
        "GST Audit & Compliance",
        "Input Tax Credit Optimization",
        "GST Litigation Support"
      ]
    },
    {
      title: "TDS",
      subtitle: "Tax Deducted at Source Management",
      description: "Complete TDS compliance and management services to ensure accurate deductions and timely deposits.",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=250&fit=crop",
      whatWeDo: [
        "TDS Calculation & Deduction",
        "Quarterly TDS Return Filing",
        "TDS Certificate Generation",
        "Lower Deduction Certificates",
        "TDS Reconciliation"
      ]
    },
    {
      title: "Accounting",
      subtitle: "Professional Bookkeeping & Accounting",
      description: "Maintain accurate financial records with our comprehensive accounting services tailored for your business.",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=400&h=250&fit=crop",
      whatWeDo: [
        "Daily Bookkeeping",
        "Financial Statement Preparation",
        "Bank Reconciliation",
        "Expense Management",
        "Financial Analysis & Reporting"
      ]
    },
    {
      title: "Payroll",
      subtitle: "Complete Payroll Management",
      description: "Streamlined payroll processing ensuring compliance with labor laws and timely salary disbursements.",
      image: "https://images.unsplash.com/photo-1554224154-22dec7ec8818?w=400&h=250&fit=crop",
      whatWeDo: [
        "Salary Processing",
        "PF & ESI Compliance",
        "Payroll Tax Management",
        "Employee Portal Setup",
        "Statutory Compliance"
      ]
    },
    {
      title: "ITR",
      subtitle: "Income Tax Return Filing",
      description: "Expert income tax return preparation and filing services for individuals and businesses.",
      image: "https://images.unsplash.com/photo-1554224154-26032fced8bd?w=400&h=250&fit=crop",
      whatWeDo: [
        "Individual ITR Filing",
        "Business ITR Filing",
        "Tax Planning & Advisory",
        "Refund Processing",
        "Income Tax Notice Handling"
      ]
    },
    {
      title: "Corporate Governance",
      subtitle: "Business Compliance & Governance",
      description: "Ensure your business meets all regulatory requirements with our corporate governance services.",
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=400&h=250&fit=crop",
      whatWeDo: [
        "Company Registration",
        "Board Meeting Management",
        "Annual Compliance",
        "ROC Filing",
        "Legal Documentation"
      ]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive financial and tax solutions designed to meet all your business needs
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={service.title} 
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="overflow-hidden rounded-t-lg">
                <img 
                  src={service.image} 
                  alt={service.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-gray-900 group-hover:text-accent transition-colors">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-accent font-medium">
                  {service.subtitle}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  {service.description}
                </p>
                
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="what-we-do" className="border-0">
                    <AccordionTrigger className="text-accent hover:text-accent/80 font-medium py-2">
                      What We Do
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2">
                        {service.whatWeDo.map((item, idx) => (
                          <li key={idx} className="flex items-center text-gray-600">
                            <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
