import React from 'react';
import { InsightArticle } from '../types';
import { X, Clock, Calendar, User, Tag, Share2 } from 'lucide-react';

interface ArticleModalProps {
  article: InsightArticle | null;
  isOpen: boolean;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({
  article,
  isOpen,
  onClose,
}) => {
  if (!isOpen || !article) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 relative">
        {/* Header */}
        <div className="bg-[#0c1a2e] text-white p-6 sm:p-8 rounded-t-2xl relative">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
            aria-label="Close article"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="space-y-3 max-w-2xl">
            <span className="text-[10px] uppercase font-bold tracking-widest text-[#c4a35a] bg-[#152843] px-2.5 py-0.5 rounded border border-[#c4a35a]/40">
              {article.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-white leading-tight">
              {article.title}
            </h2>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-300 pt-1">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#c4a35a]" />
                {article.date}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5 text-[#c4a35a]" />
                {article.readTime}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#c4a35a]" />
                {article.author.name} ({article.author.role})
              </span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 space-y-6 text-slate-800">
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 text-xs sm:text-sm font-serif italic text-slate-700 leading-relaxed border-l-4 border-l-[#c4a35a]">
            &ldquo;{article.summary}&rdquo;
          </div>

          <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
            {article.content.map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          {/* Tags */}
          <div className="pt-4 border-t border-slate-200">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">
              Topic Keywords
            </div>
            <div className="flex flex-wrap gap-2">
              {article.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-700 font-medium"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
            <div className="text-xs text-slate-500">
              Published by CBC South Sudan Economic Research Desk
            </div>
            <button
              onClick={onClose}
              className="px-5 py-2 rounded-lg bg-[#0c1a2e] text-white font-bold text-xs uppercase tracking-wider hover:bg-[#152843]"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
