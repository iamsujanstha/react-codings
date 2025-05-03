import React, { useEffect, useRef, useState } from 'react';

type VisibilityMap = { [key: string]: boolean };

const IntersectionObserverComponent: React.FC = () => {
  const [visibleSections, setVisibleSections] = useState<VisibilityMap>({});
  const sectionsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setVisibleSections((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }));
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1, // Adjust to control how much of the element is visible before triggering
      }
    );

    sectionsRef.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    return () => {
      sectionsRef.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
    };
  }, []);

  const addToRefs = (el: HTMLDivElement | null) => {
    if (el && !sectionsRef.current.includes(el)) {
      sectionsRef.current.push(el);
    }
  };

  return (
    <div className="container">
      {['Section 1', 'Section 2', 'Section 3', 'Section 4'].map((section, index) => (
        <div
          key={index}
          id={`section-${index}`}
          ref={addToRefs}
          className={`section ${visibleSections[`section-${index}`] ? 'visible' : ''}`}
          style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: '1px solid black',
            marginBottom: '1rem',
            background:'red'
          }}
        >
          {section} {visibleSections[`section-${index}`] ? '(Visible)' : '(Hidden)'}
        </div>
      ))}
      <style>{`
        .section {
          opacity: 0.5;
          transition: opacity 0.5s ease, transform 0.5s ease;
          transform: translateY(20px);
        }
        .section.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>
    </div>
  );
};

export default IntersectionObserverComponent;
