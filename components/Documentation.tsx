import React from 'react';
import { 
  Link as LinkIcon, 
  MapPin
} from 'lucide-react';

interface DocumentationProps {
  onOpenFigma: () => void;
}

export const Documentation: React.FC<DocumentationProps> = ({ onOpenFigma }) => {
  return (
    <div className="max-w-5xl mx-auto py-8 md:py-12 px-4 md:px-8 bg-white min-h-full font-sans text-zinc-900">
      {/* Header */}
      <div className="mb-8 md:mb-12 border-b border-zinc-100 pb-6 md:pb-8">
        <span className="inline-block bg-zinc-100 text-zinc-800 border border-zinc-200 px-3 py-1 rounded-full text-xs font-bold tracking-wide uppercase mb-4">PRD Template</span>
        <h1 className="text-3xl md:text-5xl font-bold text-zinc-900 mb-3 tracking-tight">Zeal AI Blueprint</h1>
        <div className="text-zinc-500 flex flex-col md:flex-row gap-2 md:gap-6 text-sm">
          <span>Direct questions to: <strong className="text-zinc-900">Product Team</strong></span>
          <span>Last updated: <strong className="text-zinc-900">Feb 02, 2026</strong></span>
        </div>
      </div>

      {/* 1. What */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">What</h2>
        <p className="text-zinc-700 leading-relaxed text-base md:text-lg max-w-3xl">
          Zeal AI is a hybrid customer support platform designed to reduce human agent load by intelligent triage and automated resolution. The system leverages Gemini Pro for natural language understanding and real-time sentiment analysis, escalating only complex queries to human agents. This initiative focuses on the <strong>Interactive Service Blueprint</strong> to visualize these flows.
        </p>
      </section>

      {/* 2. Why */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-4">Why</h2>
        <p className="text-zinc-700 leading-relaxed text-base md:text-lg mb-6 max-w-3xl">
          Current support costs are scaling linearly with user growth. We need to decouple support volume from headcount.
        </p>
        <div className="bg-zinc-50 rounded-xl p-4 md:p-6 border border-zinc-100">
          <ul className="space-y-3 text-zinc-700 text-sm md:text-base">
            <li className="flex flex-col md:flex-row md:gap-3">
              <span className="font-bold text-zinc-900 min-w-[120px]">Business Goal:</span>
              <span>Reduce average cost per ticket by 60% while maintaining high CSAT.</span>
            </li>
            <li className="flex flex-col md:flex-row md:gap-3">
              <span className="font-bold text-zinc-900 min-w-[120px]">User Goal:</span>
              <span>Reduce first response time from 4 hours to &lt; 200ms for routine inquiries.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 3. Success Criteria */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Success Criteria</h2>
        <div className="overflow-x-auto border border-zinc-200 rounded-xl shadow-sm">
          <table className="min-w-full divide-y divide-zinc-200">
            <thead className="bg-zinc-50/50">
              <tr>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Metric</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Baseline</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Target</th>
                <th className="px-4 md:px-6 py-4 text-left text-xs font-semibold text-zinc-500 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-zinc-100">
              <tr>
                <td className="px-4 md:px-6 py-4 text-sm font-medium text-zinc-900">Deflection Rate</td>
                <td className="px-4 md:px-6 py-4 text-sm text-zinc-500">0%</td>
                <td className="px-4 md:px-6 py-4 text-sm text-zinc-500">60%</td>
                <td className="px-4 md:px-6 py-4 text-sm text-emerald-600 font-medium flex items-center gap-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> On Track
                </td>
              </tr>
              <tr>
                <td className="px-4 md:px-6 py-4 text-sm font-medium text-zinc-900">AI Latency</td>
                <td className="px-4 md:px-6 py-4 text-sm text-zinc-500">N/A</td>
                <td className="px-4 md:px-6 py-4 text-sm text-zinc-500">&lt; 200ms</td>
                <td className="px-4 md:px-6 py-4 text-sm text-emerald-600 font-medium flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-emerald-500"></div> Achieved
                </td>
              </tr>
              <tr>
                <td className="px-4 md:px-6 py-4 text-sm font-medium text-zinc-900">CSAT</td>
                <td className="px-4 md:px-6 py-4 text-sm text-zinc-500">4.2</td>
                <td className="px-4 md:px-6 py-4 text-sm text-zinc-500">4.5+</td>
                <td className="px-4 md:px-6 py-4 text-sm text-amber-600 font-medium flex items-center gap-2">
                   <div className="w-1.5 h-1.5 rounded-full bg-amber-500"></div> Monitoring
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 4. Overview Status */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">[Optional] Overview</h2>
        
        <div className="flex flex-col gap-2">
          {/* Header Labels */}
          <div className="flex text-xs font-bold text-zinc-400 uppercase tracking-wider px-2">
            <div className="w-1/3 text-center border-b-2 border-zinc-100 pb-2 mb-2 mx-1">Problem Space</div>
            <div className="w-2/3 text-center border-b-2 border-zinc-100 pb-2 mb-2 mx-1">Solution Space</div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
             {/* Stage Cards */}
             {['Discover', 'Define', 'Explore', 'Deliver', 'Learn', 'Move On'].map((stage, i) => {
               const isCurrent = stage === 'Deliver';
               return (
                 <div key={stage} className={`
                    relative rounded-lg p-4 flex flex-col items-center justify-center min-h-[100px] border transition-all
                    ${isCurrent 
                      ? 'bg-white border-red-200 shadow-sm ring-4 ring-red-50/50' 
                      : 'bg-zinc-50 border-zinc-100 text-zinc-400'
                    }
                 `}>
                    {isCurrent && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-red-50 text-red-600 px-2 py-0.5 rounded-full text-[10px] font-bold border border-red-100 shadow-sm flex items-center gap-1 whitespace-nowrap">
                         <MapPin size={10} fill="currentColor" /> We are here
                      </div>
                    )}
                    <span className={`text-sm font-semibold ${isCurrent ? 'text-red-600' : 'text-zinc-500'}`}>{stage}</span>
                    {isCurrent && <span className="text-[10px] text-zinc-400 mt-1">Vercel Deploy</span>}
                 </div>
               );
             })}
          </div>

          {/* Legend */}
          <div className="flex justify-end gap-4 mt-2 px-2">
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-emerald-400"></div> Observing
              </div>
              <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                  <div className="w-2 h-2 rounded-full bg-amber-400"></div> Archived
              </div>
          </div>
        </div>
      </section>

      {/* 5. Team */}
      <section className="mb-10 md:mb-14">
        <h2 className="text-2xl font-bold text-zinc-900 mb-6">Team</h2>
        <div className="bg-white border border-zinc-200 rounded-xl p-6 shadow-sm max-w-2xl">
            <div className="space-y-4 text-sm">
                <div className="flex items-center justify-between border-b border-zinc-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-500">Product Management</span>
                    <span className="font-medium text-zinc-900 bg-zinc-50 px-3 py-1 rounded-full text-right md:text-left">Ankur Madan</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-500">Product Design</span>
                    <span className="font-medium text-zinc-900 bg-zinc-50 px-3 py-1 rounded-full text-right md:text-left">Ankur Madan</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-500">Engineering Lead</span>
                    <span className="font-medium text-zinc-900 bg-zinc-50 px-3 py-1 rounded-full text-right md:text-left">TBD</span>
                </div>
                <div className="flex items-center justify-between border-b border-zinc-50 pb-3 last:border-0 last:pb-0">
                    <span className="text-zinc-500">User Research</span>
                    <span className="font-medium text-zinc-400 italic text-right md:text-left">TBD</span>
                </div>
            </div>
        </div>
      </section>

      <hr className="my-10 md:my-16 border-zinc-100" />

      {/* 6. Product Spec */}
      <section className="mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8 tracking-tight">Product Spec</h1>
        <p className="text-zinc-500 italic mb-10 border-l-2 border-zinc-200 pl-4">
          This section gives us a consistent way of making sure we’re working on the right problems before diving into solutions.
        </p>
        
        <div className="space-y-12">
            <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide text-xs text-zinc-500">Alignment</h3>
                <p className="text-zinc-800 leading-relaxed">This ties directly to the "Operational Efficiency" company-wide OKR. By implementing AI-first support, we free up senior agents to focus on high-value enterprise accounts.</p>
            </div>

            <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide text-xs text-zinc-500">Key Insights</h3>
                <div className="bg-blue-50/50 p-6 rounded-xl border border-blue-100 relative">
                    <div className="absolute -left-1 top-6 w-1 h-8 bg-blue-500 rounded-r"></div>
                    <p className="text-zinc-700 italic text-lg">"I don't mind talking to a bot if it solves my problem in 10 seconds. I hate waiting 10 minutes for a human to tell me to reset my router."</p>
                    <p className="text-xs text-blue-600 font-semibold mt-4 uppercase tracking-wide">— User Interview #42</p>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide text-xs text-zinc-500">Problem Statement</h3>
                  <p className="text-zinc-800 leading-relaxed">We have observed that 40% of tickets are "Level 1" repetitive queries. We know this is true because our Zendesk tags show "Status Check" and "Password Reset" as top categories. This results in agent burnout and slow response times.</p>
              </div>

              <div>
                  <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide text-xs text-zinc-500">Hypothesis & Impact</h3>
                  <p className="text-zinc-800 leading-relaxed">We believe <strong>integrating a Gemini-based RAG agent</strong> will lead to <strong>automated resolution of Level 1 tickets</strong>, which will result in <strong>60% deflection rate</strong> by <strong>Q1 2024</strong>.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide text-xs text-zinc-500">Constraints</h3>
                <ul className="list-disc pl-5 text-zinc-700 space-y-2 marker:text-zinc-400">
                    <li>Must use existing PostgreSQL schema.</li>
                    <li>No PII can be stored in the vector database.</li>
                    <li>Latency must remain under 200ms per token generation.</li>
                </ul>
              </div>
               <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-3 uppercase tracking-wide text-xs text-zinc-500">Non-Goals</h3>
                <ul className="list-disc pl-5 text-zinc-400 space-y-2 marker:text-zinc-300">
                    <li className="line-through decoration-zinc-300">Voice support (planned for V2).</li>
                    <li className="line-through decoration-zinc-300">Multi-lingual support (English only for V1).</li>
                </ul>
              </div>
            </div>
        </div>
      </section>

      <hr className="my-10 md:my-16 border-zinc-100" />

      {/* 7. Design Exploration */}
      <section className="mb-24">
        <h1 className="text-3xl md:text-4xl font-bold text-zinc-900 mb-8 tracking-tight">Design Exploration</h1>
        
        {/* Wired up Figma Link */}
        <button 
          onClick={onOpenFigma}
          className="w-full md:w-auto group flex items-center justify-center gap-3 bg-zinc-900 text-white px-5 py-3 rounded-lg mb-10 hover:bg-zinc-800 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
            <div className="bg-white/20 p-1 rounded">
               <LinkIcon size={16} /> 
            </div>
            <span className="font-medium">Open Figma Prototype (Zeal_Master)</span>
        </button>

        <div className="space-y-12">
            <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide text-xs text-zinc-500">Initial Ideas</h3>
                <div className="border border-zinc-200 rounded-xl overflow-hidden shadow-sm overflow-x-auto">
                    <table className="min-w-full">
                        <thead className="bg-zinc-50">
                            <tr>
                                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-zinc-500 uppercase">Idea</th>
                                <th className="px-4 md:px-6 py-3 text-left text-xs font-semibold text-zinc-500 uppercase">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-zinc-100">
                             <tr>
                                <td className="px-4 md:px-6 py-4 text-sm font-medium text-zinc-900 whitespace-nowrap">Standard Chatbot</td>
                                <td className="px-4 md:px-6 py-4 text-sm text-zinc-600">Simple decision tree bot. Rejected due to poor user experience.</td>
                             </tr>
                             <tr className="bg-blue-50/30">
                                <td className="px-4 md:px-6 py-4 text-sm font-medium text-blue-900 whitespace-nowrap">Generative AI Agent</td>
                                <td className="px-4 md:px-6 py-4 text-sm text-zinc-800">Context-aware agent using RAG. <span className="font-bold text-blue-700">Preferred direction.</span></td>
                             </tr>
                        </tbody>
                    </table>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide text-xs text-zinc-500">User Stories</h3>
                <div className="grid gap-3">
                     <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-zinc-300 transition-colors gap-3 md:gap-0">
                         <div className="text-sm text-zinc-700">As a <strong>customer</strong>, I want to <strong>reset my password via chat</strong>, so that I don't have to wait for an email.</div>
                         <span className="self-start md:self-center bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide whitespace-nowrap">Must Have</span>
                     </div>
                     <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-white border border-zinc-200 rounded-lg shadow-sm hover:border-zinc-300 transition-colors gap-3 md:gap-0">
                         <div className="text-sm text-zinc-700">As an <strong>agent</strong>, I want <strong>summaries of AI chats</strong>, so that I can ramp up quickly on escalations.</div>
                         <span className="self-start md:self-center bg-emerald-100 text-emerald-700 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide whitespace-nowrap">Must Have</span>
                     </div>
                     <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-zinc-50 border border-zinc-100 rounded-lg gap-3 md:gap-0">
                         <div className="text-sm text-zinc-500">As a <strong>manager</strong>, I want <strong>sentiment analysis dashboards</strong>, so that I can track CSAT trends.</div>
                         <span className="self-start md:self-center bg-amber-100 text-amber-700 px-2.5 py-1 rounded-md text-xs font-bold uppercase tracking-wide whitespace-nowrap">Nice to Have</span>
                     </div>
                </div>
            </div>

            <div>
                <h3 className="text-lg font-bold text-zinc-900 mb-4 uppercase tracking-wide text-xs text-zinc-500">Decided Direction</h3>
                <div className="bg-zinc-900 text-white p-6 md:p-8 rounded-2xl shadow-xl">
                  <p className="text-lg leading-relaxed font-light">
                      We are moving forward with the <strong className="font-bold text-emerald-400">"Transparent Handoff"</strong> model. The UI will clearly distinguish between "Zeal Agent" and human agents. The blueprint in this application demonstrates the flow from Login -&gt; Dashboard -&gt; AI Chat -&gt; Human Escalation.
                  </p>
                </div>
            </div>
        </div>
      </section>

      {/* Footer / Meeting Notes Placeholder */}
       <section className="bg-zinc-50 p-6 md:p-8 rounded-2xl border border-dashed border-zinc-300 opacity-70 hover:opacity-100 transition-opacity mb-20">
          <h3 className="text-lg font-bold text-zinc-900 mb-2">[Optional] Meeting Notes</h3>
          <p className="text-sm text-zinc-500 mb-4 font-mono">10/24 - Kickoff</p>
          <ul className="list-disc pl-5 text-sm text-zinc-600 space-y-1">
              <li>Agreed on "Zeal" naming.</li>
              <li>Tech stack confirmed: React + Python Backend + Gemini API.</li>
              <li><strong>Action Item:</strong> Design team to finalize "Agent Dashboard" mocks by Friday.</li>
          </ul>
       </section>
    </div>
  );
};