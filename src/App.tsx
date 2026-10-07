/**
 * Corporate Business Circle (CBC) — Juba, South Sudan
 * Official Executive Platform & Chamber
 */
import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { ServicesSection } from './components/ServicesSection';
import { DesignPrintingShowcase } from './components/DesignPrintingShowcase';
import { WhyCBCSection } from './components/WhyCBCSection';
import { EventsSection } from './components/EventsSection';
import { EventVideoSection } from './components/EventVideoSection';
import { AnnouncementsSection } from './components/AnnouncementsSection';
import { PartnersSection } from './components/PartnersSection';
import { DignitaryMilestonesSection } from './components/DignitaryMilestonesSection';
import { GallerySection } from './components/GallerySection';
import { SectorsSection } from './components/SectorsSection';
import { InsightsSection } from './components/InsightsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';

// Modals
import { EventRegistrationModal } from './components/EventRegistrationModal';
import { MembershipModal } from './components/MembershipModal';
import { EventDetailsModal } from './components/EventDetailsModal';
import { ArticleModal } from './components/ArticleModal';
import { ProspectusModal } from './components/ProspectusModal';
import { PhotoLightboxModal } from './components/PhotoLightboxModal';
import { PrivacyModal } from './components/PrivacyModal';
import { EhsPolicyModal } from './components/EhsPolicyModal';

import { EventItem, MembershipTier, InsightArticle } from './types';
import { GalleryPhoto, GALLERY_PHOTOS } from './data/pixiesetPhotos';
import { SECTIONS } from './siteConfig';

export default function App() {
  const [activeSection, setActiveSection] = useState('hero');

  // Modal States
  const [isMembershipModalOpen, setIsMembershipModalOpen] = useState(false);
  const [selectedMembershipTier, setSelectedMembershipTier] = useState<MembershipTier | null>(null);

  const [isEventRegistrationModalOpen, setIsEventRegistrationModalOpen] = useState(false);
  const [selectedEventForRegistration, setSelectedEventForRegistration] = useState<EventItem | null>(null);

  const [isEventDetailsModalOpen, setIsEventDetailsModalOpen] = useState(false);
  const [selectedEventForDetails, setSelectedEventForDetails] = useState<EventItem | null>(null);

  const [isArticleModalOpen, setIsArticleModalOpen] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  const [isProspectusModalOpen, setIsProspectusModalOpen] = useState(false);
  const [isPrivacyModalOpen, setIsPrivacyModalOpen] = useState(false);
  const [isEhsModalOpen, setIsEhsModalOpen] = useState(false);

  // Gallery Lightbox State
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryPhoto | null>(null);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const element = document.getElementById(sectionId);
    if (element) {
      const navOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  // Scroll spy to update activeSection
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        'hero', 
        'services',
        'design-printing',
        'about', 
        'dignitary-milestones',
        'partners',
        'why-cbc', 
        'events', 
        'announcements',
        'event-highlights',
        'gallery', 
        'sectors', 
        'insights', 
        'contact'
      ];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Event handlers
  const handleOpenRegistration = (event: EventItem) => {
    setSelectedEventForRegistration(event);
    setIsEventRegistrationModalOpen(true);
  };

  const handleOpenEventDetails = (event: EventItem) => {
    setSelectedEventForDetails(event);
    setIsEventDetailsModalOpen(true);
  };

  const handleReadArticle = (article: InsightArticle) => {
    setSelectedArticle(article);
    setIsArticleModalOpen(true);
  };

  const handleOpenLightbox = (photo: GalleryPhoto, index: number) => {
    setSelectedPhoto(photo);
    setSelectedPhotoIndex(index);
    setIsLightboxOpen(true);
  };

  const handlePrevPhoto = () => {
    const newIndex = selectedPhotoIndex > 0 ? selectedPhotoIndex - 1 : GALLERY_PHOTOS.length - 1;
    setSelectedPhotoIndex(newIndex);
    setSelectedPhoto(GALLERY_PHOTOS[newIndex]);
  };

  const handleNextPhoto = () => {
    const newIndex = selectedPhotoIndex < GALLERY_PHOTOS.length - 1 ? selectedPhotoIndex + 1 : 0;
    setSelectedPhotoIndex(newIndex);
    setSelectedPhoto(GALLERY_PHOTOS[newIndex]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f8f9fb] text-slate-900 selection:bg-[#00aeef]/30 selection:text-[#0c1a2e]">
      {/* Navigation Header */}
      <Navbar
        activeSection={activeSection}
        onNavigate={handleNavigate}
        onOpenMembershipModal={() => {
          setSelectedMembershipTier(null);
          setIsMembershipModalOpen(true);
        }}
        onOpenProspectusModal={() => setIsProspectusModalOpen(true)}
        onOpenEhsModal={() => setIsEhsModalOpen(true)}
      />

      {/* Main Page Content */}
      <main className="flex-1 pt-14 lg:pt-24">
        <Hero
          onOpenMembershipModal={() => {
            setSelectedMembershipTier(null);
            setIsMembershipModalOpen(true);
          }}
          onOpenEventRegistration={handleOpenRegistration}
          onNavigateToEvents={() => handleNavigate('events')}
          onNavigateToAbout={() => handleNavigate('about')}
          onNavigateToMilestones={() => handleNavigate('gallery')}
          onOpenLightbox={(photoUrl, title) => {
            const matchIndex = GALLERY_PHOTOS.findIndex(p => p.url === photoUrl);
            if (matchIndex >= 0) {
              handleOpenLightbox(GALLERY_PHOTOS[matchIndex], matchIndex);
            } else {
              handleOpenLightbox({
                id: 'custom-dignitary',
                title,
                category: 'VIP & Dignitary Engagements',
                collection: 'VIP & Dignitary Milestones',
                url: photoUrl,
                urlThumb: photoUrl,
                urlFull: photoUrl,
                width: 2000,
                height: 1500,
              }, 0);
            }
          }}
        />

        {SECTIONS.services && (<ServicesSection
          onSelectServiceForInquiry={(serviceName) => {
            handleNavigate('contact');
          }}
          onOpenProspectusModal={() => setIsProspectusModalOpen(true)}
        />)}

        {SECTIONS.designPrinting && (<DesignPrintingShowcase
          onRequestQuote={(serviceTitle) => {
            handleNavigate('contact');
          }}
        />)}

        {SECTIONS.about && (<About
          onOpenMembershipModal={() => {
            setSelectedMembershipTier(null);
            setIsMembershipModalOpen(true);
          }}
          onOpenProspectusModal={() => setIsProspectusModalOpen(true)}
          onPartnerWithUs={() => {
            setSelectedMembershipTier(null);
            setIsMembershipModalOpen(true);
          }}
          onOpenEhsModal={() => setIsEhsModalOpen(true)}
        />)}

        {SECTIONS.dignitaryMilestones && (<DignitaryMilestonesSection
          onOpenLightbox={(photoUrl, title) => {
            const matchIndex = GALLERY_PHOTOS.findIndex(p => p.url === photoUrl);
            if (matchIndex >= 0) {
              handleOpenLightbox(GALLERY_PHOTOS[matchIndex], matchIndex);
            } else {
              setSelectedPhoto({
                id: 'dignitary-custom',
                title: title,
                category: 'VIP & Dignitary Engagements',
                collection: 'VIP & Dignitary Milestones',
                url: photoUrl,
                urlThumb: photoUrl,
                urlFull: photoUrl,
                width: 2000,
                height: 1500,
              });
              setSelectedPhotoIndex(0);
              setIsLightboxOpen(true);
            }
          }}
          onNavigateToEvents={() => handleNavigate('events')}
          onNavigateToContact={() => handleNavigate('contact')}
        />)}

        {SECTIONS.partners && (<PartnersSection
          onOpenPartnershipInquiry={() => {
            setSelectedMembershipTier(null);
            setIsMembershipModalOpen(true);
          }}
          onDownloadProspectus={() => setIsProspectusModalOpen(true)}
          onPartnerWithUs={() => {
            setSelectedMembershipTier(null);
            setIsMembershipModalOpen(true);
          }}
          onContactUs={() => handleNavigate('contact')}
        />)}

        {SECTIONS.whyCbc && (<WhyCBCSection
          onAttendEvent={() => handleNavigate('events')}
          onPartnerWithUs={() => {
            setSelectedMembershipTier(null);
            setIsMembershipModalOpen(true);
          }}
        />)}

        {SECTIONS.events && (<EventsSection
          onRegisterEvent={handleOpenRegistration}
          onViewEventDetails={handleOpenEventDetails}
          onNavigateToGallery={() => handleNavigate('gallery')}
        />)}

        {(SECTIONS as any).announcements && (<AnnouncementsSection
          onOpenContact={() => handleNavigate('contact')}
        />)}

        {SECTIONS.eventVideo && (<EventVideoSection
          onRegisterInterest={() => {
            if (handleNavigate) handleNavigate('events');
          }}
          onOpenGallery={() => handleNavigate('gallery')}
        />)}

        {SECTIONS.gallery && (<GallerySection onOpenLightbox={handleOpenLightbox} />)}

        {SECTIONS.sectors && (<SectorsSection
          onOpenMembershipModal={() => {
            setSelectedMembershipTier(null);
            setIsMembershipModalOpen(true);
          }}
        />)}

        {SECTIONS.insights && (<InsightsSection onReadArticle={handleReadArticle} />)}

        {SECTIONS.contact && (<ContactSection 
          onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        />)}
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenMembershipModal={() => {
          setSelectedMembershipTier(null);
          setIsMembershipModalOpen(true);
        }}
        onOpenProspectusModal={() => setIsProspectusModalOpen(true)}
        onOpenPrivacyModal={() => setIsPrivacyModalOpen(true)}
        onOpenEhsModal={() => setIsEhsModalOpen(true)}
      />

      {/* Floating WhatsApp & Location Speed Dial */}
      <FloatingWhatsApp />

      {/* Modals */}
      <EhsPolicyModal
        isOpen={isEhsModalOpen}
        onClose={() => setIsEhsModalOpen(false)}
      />
      <EventRegistrationModal
        event={selectedEventForRegistration}
        isOpen={isEventRegistrationModalOpen}
        onClose={() => {
          setIsEventRegistrationModalOpen(false);
          setSelectedEventForRegistration(null);
        }}
      />

      <EventDetailsModal
        event={selectedEventForDetails}
        isOpen={isEventDetailsModalOpen}
        onClose={() => {
          setIsEventDetailsModalOpen(false);
          setSelectedEventForDetails(null);
        }}
        onRegister={handleOpenRegistration}
      />

      <MembershipModal
        initialTier={selectedMembershipTier}
        isOpen={isMembershipModalOpen}
        onClose={() => {
          setIsMembershipModalOpen(false);
          setSelectedMembershipTier(null);
        }}
      />

      <ArticleModal
        article={selectedArticle}
        isOpen={isArticleModalOpen}
        onClose={() => {
          setIsArticleModalOpen(false);
          setSelectedArticle(null);
        }}
      />

      <ProspectusModal
        isOpen={isProspectusModalOpen}
        onClose={() => setIsProspectusModalOpen(false)}
        onApplyMembership={() => {
          setIsProspectusModalOpen(false);
          setSelectedMembershipTier(null);
          setIsMembershipModalOpen(true);
        }}
      />

      <PhotoLightboxModal
        photo={selectedPhoto}
        isOpen={isLightboxOpen}
        onClose={() => {
          setIsLightboxOpen(false);
          setSelectedPhoto(null);
        }}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
        currentIndex={selectedPhotoIndex}
        totalPhotos={GALLERY_PHOTOS.length}
      />

      <PrivacyModal
        isOpen={isPrivacyModalOpen}
        onClose={() => setIsPrivacyModalOpen(false)}
      />
    </div>
  );
}
