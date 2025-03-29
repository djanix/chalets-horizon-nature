import Heading from '../components/Heading';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Testimonials from '../components/Testimonials';
import Pricing from '../components/Pricing';
import Email from '../components/Email';
import FeatureColumnsGroup from '../components/FeatureColumnsGroup';
import PhotoGallery from '../components/PhotoGallery';
import ActivityList from '../components/ActivityList';
import FeatureRowsGroup from '../components/FeatureRowsGroup';
import Localisation from '../components/Localisation';
import RichTextContainer from '../components/RichTextContainer';
import Availabilities from '../components/Availabilities';
import Reservation from '../components/Reservation';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function sectionRenderer(section: any, index: number) {
  switch (section.__component) {
    case 'sections.heading':
      return <Heading key={index} data={section} />;
    case 'sections.hero':
      return <Hero key={index} data={section} />;
    case 'sections.features':
      return <Features key={index} data={section} />;
    case 'sections.testimonials-group':
      return <Testimonials key={index} data={section} />;
    case 'sections.pricing':
      return <Pricing key={index} data={section} />;
    case 'sections.lead-form':
      return <Email key={index} data={section} />;
    case 'sections.feature-columns-group':
      return <FeatureColumnsGroup key={index} data={section} />;
    case 'sections.feature-rows-group':
      return <FeatureRowsGroup key={index} data={section} />;
    case 'sections.photo-gallery':
      return <PhotoGallery key={index} data={section} />;
    case 'sections.activity-list':
      return <ActivityList key={index} data={section} />;
    case 'sections.localisation':
      return <Localisation key={index} data={section} />;
    case 'sections.rich-text':
      return <RichTextContainer key={index} data={{ body: section.content }} />;
    case 'sections.availabilities':
      return <Availabilities key={index} data={section} />;
    case 'sections.reservation':
      return <Reservation key={index} data={section} />;
    default:
      return null;
  }
}
