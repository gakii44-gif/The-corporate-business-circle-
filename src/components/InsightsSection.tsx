import React from 'react';
import { INSIGHTS } from '../data/mockData';
import { InsightArticle } from '../types';
import { BookOpen, Calendar, Clock, ArrowRight, TrendingUp, Tag } from 'lucide-react';

interface InsightsSectionProps {
  onReadArticle: (article: InsightArticle) => void;
}

export const InsightsSection: React.FC<InsightsSectionProps> = ({ onReadArticle }) => {
  return (
    <section id="insights" className="py-20 lg:py-28 bg-white text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#0c1a2e]/5 border border-[#c4a35a]/30 text-xs font-bold uppercase tracking-wider text-[#0c1a2e]">
            <BookOpen className="w-4 h-4 text-[#c4a35a]" />
            <span>Economic Intelligence & Briefings</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#0c1a2e] tracking-tight">
            South Sudan Business Intelligence
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
            In-depth analysis from CBC economists and sector specialists on regional trade tariffs,
            currency dynamics, infrastructure investments, and legal frameworks.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHTS.map((article) => (
            <div
              key={article.id}
              onClick={() => onReadArticle(article)}
              className="bg-[#f8f9fb] rounded-2xl border border-slate-200 p-6 sm:p-7 shadow-sm hover:shadow-xl hover:border-[#c4a35a]/60 transition-all flex flex-col justify-between cursor-pointer group"
            >
              <div className="space-y-3">
                {/* Category & Read Time */}
                <div className="flex items-center justify-between text-[11px] font-semibold">
                  <span className="px-2.5 py-0.5 rounded bg-[#0c1a2e] text-[#c4a35a] font-bold uppercase tracking-wider">
                    {article.category}
                  </span>
                  <span className="text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {article.readTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-serif font-bold text-[#0c1a2e] group-hover:text-[#af8d43] transition-colors leading-snug pt-1">
                  {article.title}
                </h3>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-3">
                  {article.summary}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {article.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] px-2 py-0.5 rounded bg-slate-200/70 text-slate-700 font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Author & CTA Row */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 flex items-center justify-between">
                <div>
                  <div className="text-xs font-bold text-[#0c1a2e]">{article.author.name}</div>
                  <div className="text-[10px] text-slate-500">{article.author.role}</div>
                </div>

                <div className="w-8 h-8 rounded-full bg-slate-200 group-hover:bg-[#c4a35a] text-slate-700 group-hover:text-[#0c1a2e] flex items-center justify-center transition-colors">
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
