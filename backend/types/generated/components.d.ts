import type { Attribute, Schema } from '@strapi/strapi';

export interface ElementsActivity extends Schema.Component {
  collectionName: 'components_elements_activities';
  info: {
    description: '';
    displayName: 'activity';
  };
  attributes: {
    content: Attribute.RichText;
    picture: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFeature extends Schema.Component {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Attribute.Text;
    media: Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    showLink: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    title: Attribute.String;
    url: Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Schema.Component {
  collectionName: 'components_slices_feature_columns';
  info: {
    description: '';
    displayName: 'Feature column';
    icon: 'align-center';
    name: 'FeatureColumn';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Schema.Component {
  collectionName: 'components_slices_feature_rows';
  info: {
    description: '';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    name: 'FeatureRow';
  };
  attributes: {
    description: Attribute.Text;
    icon: Attribute.String & Attribute.CustomField<'plugin::react-icons.icon'>;
    link: Attribute.Component<'links.link'>;
    title: Attribute.String & Attribute.Required;
  };
}

export interface ElementsFooterSection extends Schema.Component {
  collectionName: 'components_links_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
    name: 'FooterSection';
  };
  attributes: {
    links: Attribute.Component<'links.link', true>;
    title: Attribute.String;
  };
}

export interface ElementsLogos extends Schema.Component {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    icon: 'apple-alt';
    name: 'logos';
  };
  attributes: {
    logo: Attribute.Media<'images'>;
    title: Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Schema.Component {
  collectionName: 'components_elements_notification_banners';
  info: {
    description: '';
    displayName: 'Notification banner';
    icon: 'exclamation';
    name: 'NotificationBanner';
  };
  attributes: {
    heading: Attribute.String & Attribute.Required;
    link: Attribute.Component<'links.link'>;
    show: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.Text & Attribute.Required;
    type: Attribute.Enumeration<['alert', 'info', 'warning']> &
      Attribute.Required;
  };
}

export interface ElementsReservation extends Schema.Component {
  collectionName: 'components_elements_reservations';
  info: {
    description: '';
    displayName: 'Reservation';
    icon: 'calendar';
  };
  attributes: {
    endDate: Attribute.Date;
    startDate: Attribute.Date;
    title: Attribute.String;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    contact: Attribute.Component<'shared.contact'>;
    footerLogo: Attribute.Component<'layout.logo'>;
    legalLinks: Attribute.Component<'links.link', true>;
    menuLinks: Attribute.Component<'links.link', true>;
    socialLinks: Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutLogo extends Schema.Component {
  collectionName: 'components_layout_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logoImg: Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Attribute.Required;
    logoText: Attribute.String;
  };
}

export interface LayoutNavbar extends Schema.Component {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'map-signs';
    name: 'Navbar';
  };
  attributes: {
    button: Attribute.Component<'links.button-link'>;
    links: Attribute.Component<'links.link', true>;
    navbarLogo: Attribute.Component<'layout.logo'>;
  };
}

export interface LinksButton extends Schema.Component {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Schema.Component {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button link';
    icon: 'fingerprint';
    name: 'Button-link';
  };
  attributes: {
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String;
    type: Attribute.Enumeration<['primary', 'secondary']>;
    url: Attribute.String;
  };
}

export interface LinksLink extends Schema.Component {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
    name: 'Link';
  };
  attributes: {
    newTab: Attribute.Boolean & Attribute.DefaultTo<false>;
    text: Attribute.String & Attribute.Required;
    url: Attribute.String & Attribute.Required;
  };
}

export interface LinksSocialLink extends Schema.Component {
  collectionName: 'components_links_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
  };
  attributes: {
    color: Attribute.String &
      Attribute.CustomField<'plugin::color-picker.color'>;
    social: Attribute.Enumeration<['Facebook', 'Instagram']>;
    url: Attribute.String & Attribute.Required;
  };
}

export interface MetaMetadata extends Schema.Component {
  collectionName: 'components_meta_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
  };
}

export interface SectionsActivityList extends Schema.Component {
  collectionName: 'components_sections_activity_lists';
  info: {
    displayName: 'Activity list';
  };
  attributes: {
    activities: Attribute.Component<'elements.activity', true>;
  };
}

export interface SectionsAvailabilities extends Schema.Component {
  collectionName: 'components_sections_availabilities';
  info: {
    description: '';
    displayName: 'Availabilities';
    icon: 'book';
  };
  attributes: {
    description: Attribute.Text;
    reservations: Attribute.Component<'elements.reservation', true>;
  };
}

export interface SectionsBottomActions extends Schema.Component {
  collectionName: 'components_slices_bottom_actions';
  info: {
    description: '';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    name: 'BottomActions';
  };
  attributes: {
    buttons: Attribute.Component<'links.button-link', true>;
    description: Attribute.Text;
    title: Attribute.String;
  };
}

export interface SectionsFeatureColumnsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    description: '';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    name: 'FeatureColumnsGroup';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Schema.Component {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    displayName: 'Feaures row group';
    icon: 'bars';
    name: 'FeatureRowsGroup';
  };
  attributes: {
    features: Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatures extends Schema.Component {
  collectionName: 'components_layout_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    description: Attribute.Text;
    feature: Attribute.Component<'elements.feature', true>;
    heading: Attribute.String;
  };
}

export interface SectionsHeading extends Schema.Component {
  collectionName: 'components_sections_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    anchor: Attribute.String;
    description: Attribute.String;
    heading: Attribute.String & Attribute.Required;
  };
}

export interface SectionsHero extends Schema.Component {
  collectionName: 'components_slices_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'heading';
    name: 'Hero';
  };
  attributes: {
    buttons: Attribute.Component<'links.button-link', true>;
    description: Attribute.Text & Attribute.Required;
    picture: Attribute.Media<'images'> & Attribute.Required;
    title: Attribute.String & Attribute.Required;
  };
}

export interface SectionsLeadForm extends Schema.Component {
  collectionName: 'components_sections_lead_forms';
  info: {
    description: '';
    displayName: 'Lead form';
    icon: 'at';
    name: 'Lead form';
  };
  attributes: {
    description: Attribute.Text;
    emailPlaceholder: Attribute.String;
    location: Attribute.String;
    submitButton: Attribute.Component<'links.button'>;
    title: Attribute.String;
  };
}

export interface SectionsLocalisation extends Schema.Component {
  collectionName: 'components_sections_localisations';
  info: {
    displayName: 'Localisation';
    icon: 'plane';
  };
  attributes: {
    description: Attribute.Text;
    map: Attribute.Component<'shared.map'>;
  };
}

export interface SectionsPhotoGallery extends Schema.Component {
  collectionName: 'components_sections_photo_galleries';
  info: {
    description: '';
    displayName: 'Photo  gallery';
    icon: 'picture';
  };
  attributes: {
    mediaList: Attribute.Media<'images', true>;
  };
}

export interface SectionsReservation extends Schema.Component {
  collectionName: 'components_sections_reservations';
  info: {
    displayName: 'Reservation';
    icon: 'envelop';
  };
  attributes: {
    cancellation: Attribute.RichText;
    note: Attribute.Text;
    rules: Attribute.RichText;
  };
}

export interface SectionsRichText extends Schema.Component {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    content: Attribute.RichText;
  };
}

export interface SharedContact extends Schema.Component {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    address: Attribute.String;
    email: Attribute.Email;
    phone: Attribute.String;
  };
}

export interface SharedMap extends Schema.Component {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'Map';
    icon: 'earth';
  };
  attributes: {
    address: Attribute.String;
  };
}

export interface SharedMedia extends Schema.Component {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Schema.Component {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Attribute.RichText;
  };
}

export interface SharedSeo extends Schema.Component {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Attribute.Text & Attribute.Required;
    metaTitle: Attribute.String & Attribute.Required;
    shareImage: Attribute.Media<'images'>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'elements.activity': ElementsActivity;
      'elements.feature': ElementsFeature;
      'elements.feature-column': ElementsFeatureColumn;
      'elements.feature-row': ElementsFeatureRow;
      'elements.footer-section': ElementsFooterSection;
      'elements.logos': ElementsLogos;
      'elements.notification-banner': ElementsNotificationBanner;
      'elements.reservation': ElementsReservation;
      'layout.footer': LayoutFooter;
      'layout.logo': LayoutLogo;
      'layout.navbar': LayoutNavbar;
      'links.button': LinksButton;
      'links.button-link': LinksButtonLink;
      'links.link': LinksLink;
      'links.social-link': LinksSocialLink;
      'meta.metadata': MetaMetadata;
      'sections.activity-list': SectionsActivityList;
      'sections.availabilities': SectionsAvailabilities;
      'sections.bottom-actions': SectionsBottomActions;
      'sections.feature-columns-group': SectionsFeatureColumnsGroup;
      'sections.feature-rows-group': SectionsFeatureRowsGroup;
      'sections.features': SectionsFeatures;
      'sections.heading': SectionsHeading;
      'sections.hero': SectionsHero;
      'sections.lead-form': SectionsLeadForm;
      'sections.localisation': SectionsLocalisation;
      'sections.photo-gallery': SectionsPhotoGallery;
      'sections.reservation': SectionsReservation;
      'sections.rich-text': SectionsRichText;
      'shared.contact': SharedContact;
      'shared.map': SharedMap;
      'shared.media': SharedMedia;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
    }
  }
}
