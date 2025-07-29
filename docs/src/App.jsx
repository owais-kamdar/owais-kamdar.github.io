import { Github, Linkedin, Mail, FileText, Brain, Database, Code, ChevronRight, ExternalLink, LineChart, Bot, FileSearch, Microscope, BarChart3, Camera } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-100">
      {/* Header/Hero Section */}
      <header className="relative bg-gradient-to-r from-blue-900 via-white-900 to-white-900 py-32">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1950&q=80')] opacity-10 bg-cover bg-center" />
        <div className="container mx-auto px-4 relative">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-blue-100">
              Owais Kamdar
            </h1>
            <p className="text-2xl mb-8 text-blue-200">Aspiring Machine Learning Engineer</p>
            <div className="flex space-x-6">
              <a href="https://github.com/owais.kamdar" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all">
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              <a href="https://linkedin.com/in/owais-kamdar" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all">
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a href="mailto:owais.kamdar@duke.edu" 
                className="flex items-center gap-2 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all">
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16 -mt-2">
        {/* Education Section */}
        <section className="mb-20 animate-fade-in-delay-1">
          <h2 className="text-3xl font-bold mb-8 text-gray-100 flex items-center gap-2">
            <Brain className="w-8 h-8" />
            Education
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="glass-card rounded-xl p-8">
              <h3 className="font-bold text-xl mb-2">Duke University</h3>
              <p className="text-blue-400 font-medium mb-2">Master of Engineering in Artificial Intelligence</p>
              <p className="text-gray-400">Aug 2024 - Aug 2025</p>
              <p className="text-gray-400 mt-2">Coursework: Deep Learning Applications; Large Language Models; Modeling Process and Algorithms; Sourcing Data; Optimization in Practice</p>
            </div>
            <div className="glass-card rounded-xl p-8">
              <h3 className="font-bold text-xl mb-2">University of North Carolina at Chapel Hill</h3>
              <p className="text-blue-400 font-medium mb-2">B.S. in Neuroscience; Minors in Data Science and Chemistry</p>
              <p className="text-blue-400"></p>
              <p className="text-gray-400">August 2018 - May 2022</p>
              <p className="text-gray-400 mt-2">Coursework: Computational Neuroscience; Scientific Programming; Foundations of Statistics and Data Science</p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="mb-20 animate-fade-in-delay-1">
          <h2 className="text-3xl font-bold mb-8 text-gray-100 flex items-center gap-2">
            <Code className="w-8 h-8" />
            Experience
          </h2>
          <div className="space-y-6">
            <div className="glass-card rounded-xl p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">T-Mobile</h3>
                  <p className="text-blue-400 font-medium">Graduate Machine Learning Engineer Intern</p>
                </div>
                <span className="text-gray-400">May 2025 - Aug 2025</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Migrated Power BI dashboard to Databricks, reducing refresh time by 15% and improving data accuracy.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Deployed RAG-integrated Databricks chatbot, transforming model outputs into explainable insights.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Collaborated on CI/CD pipeline with Gitlab and Databricks, reducing manual deployment time by 20%.</span>
                </li>
              </ul>
            </div>
            
            <div className="glass-card rounded-xl p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">Advantis Solutions</h3>
                  <p className="text-blue-400 font-medium">Data Engineer</p>
                </div>
                <span className="text-gray-400">Jan 2024 - Aug 2024</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Developed 5+ GPT-powered chatbots connecting client databases to OpenAI APIs, reducing response time by 25%.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Built AWS data pipelines processing 50GB+ client data, enabling real-time dashboards and analytics.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Implemented Python error handling and feedback loops, improving response relevance by 15%.</span>
                </li>
              </ul>
            </div>
            <div className="glass-card rounded-xl p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">MRJ Investments, LLC</h3>
                  <p className="text-blue-400 font-medium">Data Analyst</p>
                </div>
                <span className="text-gray-400">Jan 2023 - Dec 2023</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Built Python regression models predicting construction costs, avoiding $23k in overruns across 4 projects.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Created Tableau dashboards analyzing tenant data, contributing to $13k additional revenue.</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Streamlined project tracking by consolidating Excel into Power Query system, reducing manual data entry.</span>
                </li>
              </ul>
            </div>

            <div className="glass-card rounded-xl p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="font-bold text-xl mb-2">UNC Water Institute</h3>
                  <p className="text-blue-400 font-medium">R&D Data Lead</p>
                </div>
                <span className="text-gray-400">May 2021 - Jun 2023</span>
              </div>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Co-led a data-centric R&D team of 9 researchers under the WHO R&D Blueprint</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Performed bioinformatics analysis using Python and Excel to parse cell culture data</span>
                </li>
                <li className="flex items-start gap-2">
                  <ChevronRight className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
                  <span>Rigorously managed mammalian DBT and ST cell cultures following SOPs</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-20 animate-fade-in-delay-2">
          <h2 className="text-3xl font-bold mb-8 text-gray-100 flex items-center gap-2">
            <Database className="w-8 h-8" />
            Skills
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-8">
              <Brain className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-lg mb-4">Machine Learning</h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">PyTorch</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">TensorFlow</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">Scikit-Learn</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">Deep Learning</span>
              </div>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Database className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-lg mb-4">Data Engineering</h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">SQL</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">Spark</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">ETL</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">Data Pipeline Design</span>
              </div>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Code className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-lg mb-4">Programming</h3>
              <div className="space-y-2">
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">Python</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">R</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">MATLAB</span>
                <span className="inline-block bg-blue-900/50 text-blue-300 rounded-full px-3 py-1 text-sm mr-2 mb-2">Docker</span>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="animate-fade-in-delay-2">
          <h2 className="text-3xl font-bold mb-8 text-gray-100 flex items-center gap-2">
            <FileText className="w-8 h-8" />
            Projects
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-card rounded-xl p-8">
              <Camera className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-xl mb-4">Food Classification System</h3>
              <p className="text-gray-300 mb-6">Multi-approach computer vision system classifying food images into 121 categories.</p>
              <a href="https://github.com/owais-kamdar/Food-Classifier" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Bot className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-xl mb-4">GestureBot</h3>
              <p className="text-gray-300 mb-6">Raspberry Pi project using CV to detect hand gestures and control a robot hand in real-time.</p>
              <a href="https://github.com/owais-kamdar/robotic-hand-tracking" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Microscope className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-xl mb-4">Retinal Fundus Disorder Detection</h3>
              <p className="text-gray-300 mb-6">ML and Deep Learning based approaches to classify retinal disorders using CV.</p>
              <a href="https://github.com/AIPI540Spring2025Avengers/retinal-fundus-disorder-detection" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Bot className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-xl mb-4">Health Metrics Analysis</h3>
              <p className="text-gray-300 mb-6">Create and transform raw Fitbit data into clinically aligned health insights.</p>
              <a href="https://github.com/owais-kamdar/Fitbit-Health-Metrics-Analysis" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="glass-card rounded-xl p-8">
              <Brain className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-xl mb-4">Duke University Chatbot</h3>
              <p className="text-gray-300 mb-6">Agentic AI assistant providing information about the Duke University AIPI program.</p>
              <a href="https://github.com/owais-kamdar/duke-chatbot" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
            <div className="glass-card rounded-xl p-8">
              <FileSearch className="w-10 h-10 text-blue-400 mb-6" />
              <h3 className="font-bold text-xl mb-4">SuperChat</h3>
              <p className="text-gray-300 mb-6">Chat interface for 3 concurrent Amazon Bedrock models with RAG and analytics dashboard.</p>
              <a href="https://github.com/owais-kamdar/bedrock-chat" className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                View Project <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white py-12 mt-20">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-6">© 2024 Owais Kamdar. All rights reserved.</p>
          <div className="flex justify-center space-x-6">
            <a href="mailto:owais.kamdar@duke.edu" 
              className="hover:text-blue-400 transition-colors p-2">
              <Mail className="w-6 h-6" />
            </a>
            <a href="https://linkedin.com/in/owais-kamdar" 
              className="hover:text-blue-400 transition-colors p-2">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="https://github.com/owais.kamdar" 
              className="hover:text-blue-400 transition-colors p-2">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="hover:text-blue-400 transition-colors p-2">
              <FileText className="w-6 h-6" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;



console.log("App.tsx is rendering");
