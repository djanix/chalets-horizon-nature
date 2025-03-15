import type { Schema, Struct } from '@strapi/strapi';

export interface ElementsActivity extends Struct.ComponentSchema {
  collectionName: 'components_elements_activities';
  info: {
    description: '';
    displayName: 'activity';
  };
  attributes: {
    content: Schema.Attribute.RichText;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeature extends Struct.ComponentSchema {
  collectionName: 'components_elements_features';
  info: {
    displayName: 'Feature';
  };
  attributes: {
    description: Schema.Attribute.Text;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    showLink: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

export interface ElementsFeatureColumn extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns';
  info: {
    description: '';
    displayName: 'Feature column';
    icon: 'align-center';
    name: 'FeatureColumn';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::material-symbols.icon'>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFeatureRow extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows';
  info: {
    description: '';
    displayName: 'Feature row';
    icon: 'arrows-alt-h';
    name: 'FeatureRow';
  };
  attributes: {
    description: Schema.Attribute.Text;
    icon: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::material-symbols.icon'>;
    link: Schema.Attribute.Component<'links.link', false>;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface ElementsFooterSection extends Struct.ComponentSchema {
  collectionName: 'components_links_footer_sections';
  info: {
    displayName: 'Footer section';
    icon: 'chevron-circle-down';
    name: 'FooterSection';
  };
  attributes: {
    links: Schema.Attribute.Component<'links.link', true>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsLogos extends Struct.ComponentSchema {
  collectionName: 'components_elements_logos';
  info: {
    displayName: 'Logos';
    icon: 'apple-alt';
    name: 'logos';
  };
  attributes: {
    logo: Schema.Attribute.Media<'images'>;
    title: Schema.Attribute.String;
  };
}

export interface ElementsNotificationBanner extends Struct.ComponentSchema {
  collectionName: 'components_elements_notification_banners';
  info: {
    description: '';
    displayName: 'Notification banner';
    icon: 'exclamation';
    name: 'NotificationBanner';
  };
  attributes: {
    heading: Schema.Attribute.String & Schema.Attribute.Required;
    link: Schema.Attribute.Component<'links.link', false>;
    show: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.Text & Schema.Attribute.Required;
    type: Schema.Attribute.Enumeration<['alert', 'info', 'warning']> &
      Schema.Attribute.Required;
  };
}

export interface ElementsReservation extends Struct.ComponentSchema {
  collectionName: 'components_elements_reservations';
  info: {
    description: '';
    displayName: 'Reservation';
    icon: 'calendar';
  };
  attributes: {
    endDate: Schema.Attribute.Date;
    startDate: Schema.Attribute.Date;
    title: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    contact: Schema.Attribute.Component<'shared.contact', false>;
    footerLogo: Schema.Attribute.Component<'layout.logo', false>;
    legalLinks: Schema.Attribute.Component<'links.link', true>;
    menuLinks: Schema.Attribute.Component<'links.link', true>;
    socialLinks: Schema.Attribute.Component<'links.social-link', true>;
  };
}

export interface LayoutLogo extends Struct.ComponentSchema {
  collectionName: 'components_layout_logos';
  info: {
    description: '';
    displayName: 'Logo';
  };
  attributes: {
    logoImg: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'> &
      Schema.Attribute.Required;
    logoText: Schema.Attribute.String;
  };
}

export interface LayoutNavbar extends Struct.ComponentSchema {
  collectionName: 'components_layout_navbars';
  info: {
    description: '';
    displayName: 'Navbar';
    icon: 'map-signs';
    name: 'Navbar';
  };
  attributes: {
    button: Schema.Attribute.Component<'links.button-link', false>;
    links: Schema.Attribute.Component<'links.link', true>;
    navbarLogo: Schema.Attribute.Component<'layout.logo', false>;
  };
}

export interface LinksButton extends Struct.ComponentSchema {
  collectionName: 'components_links_simple_buttons';
  info: {
    description: '';
    displayName: 'Button';
    icon: 'fingerprint';
    name: 'Button';
  };
  attributes: {
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
  };
}

export interface LinksButtonLink extends Struct.ComponentSchema {
  collectionName: 'components_links_buttons';
  info: {
    description: '';
    displayName: 'Button link';
    icon: 'fingerprint';
    name: 'Button-link';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<['primary', 'secondary']>;
    url: Schema.Attribute.String;
  };
}

export interface LinksLink extends Struct.ComponentSchema {
  collectionName: 'components_links_links';
  info: {
    description: '';
    displayName: 'Link';
    icon: 'link';
    name: 'Link';
  };
  attributes: {
    newTab: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    text: Schema.Attribute.String & Schema.Attribute.Required;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface LinksSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_links_social_links';
  info: {
    description: '';
    displayName: 'Social Link';
  };
  attributes: {
    color: Schema.Attribute.String &
      Schema.Attribute.CustomField<'plugin::color-picker.color'>;
    social: Schema.Attribute.Enumeration<['Facebook', 'Instagram']>;
    url: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface MetaMetadata extends Struct.ComponentSchema {
  collectionName: 'components_meta_metadata';
  info: {
    description: '';
    displayName: 'Metadata';
    icon: 'robot';
    name: 'Metadata';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsActivityList extends Struct.ComponentSchema {
  collectionName: 'components_sections_activity_lists';
  info: {
    displayName: 'Activity list';
  };
  attributes: {
    activities: Schema.Attribute.Component<'elements.activity', true>;
  };
}

export interface SectionsAvailabilities extends Struct.ComponentSchema {
  collectionName: 'components_sections_availabilities';
  info: {
    description: '';
    displayName: 'Availabilities';
    icon: 'book';
  };
  attributes: {
    description: Schema.Attribute.Text;
    reservations: Schema.Attribute.Component<'elements.reservation', true>;
  };
}

export interface SectionsBottomActions extends Struct.ComponentSchema {
  collectionName: 'components_slices_bottom_actions';
  info: {
    description: '';
    displayName: 'Bottom actions';
    icon: 'angle-double-right';
    name: 'BottomActions';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SectionsFeatureColumnsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_columns_groups';
  info: {
    description: '';
    displayName: 'Feature columns group';
    icon: 'star-of-life';
    name: 'FeatureColumnsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-column', true>;
  };
}

export interface SectionsFeatureRowsGroup extends Struct.ComponentSchema {
  collectionName: 'components_slices_feature_rows_groups';
  info: {
    displayName: 'Feaures row group';
    icon: 'bars';
    name: 'FeatureRowsGroup';
  };
  attributes: {
    features: Schema.Attribute.Component<'elements.feature-row', true>;
  };
}

export interface SectionsFeatures extends Struct.ComponentSchema {
  collectionName: 'components_layout_features';
  info: {
    description: '';
    displayName: 'Features';
  };
  attributes: {
    description: Schema.Attribute.Text;
    feature: Schema.Attribute.Component<'elements.feature', true>;
    heading: Schema.Attribute.String;
  };
}

export interface SectionsHeading extends Struct.ComponentSchema {
  collectionName: 'components_sections_headings';
  info: {
    description: '';
    displayName: 'Heading';
  };
  attributes: {
    anchor: Schema.Attribute.String;
    description: Schema.Attribute.String;
    heading: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsHero extends Struct.ComponentSchema {
  collectionName: 'components_slices_heroes';
  info: {
    description: '';
    displayName: 'Hero';
    icon: 'heading';
    name: 'Hero';
  };
  attributes: {
    buttons: Schema.Attribute.Component<'links.button-link', true>;
    description: Schema.Attribute.Text & Schema.Attribute.Required;
    picture: Schema.Attribute.Media<'images'> & Schema.Attribute.Required;
    title: Schema.Attribute.String & Schema.Attribute.Required;
  };
}

export interface SectionsLeadForm extends Struct.ComponentSchema {
  collectionName: 'components_sections_lead_forms';
  info: {
    description: '';
    displayName: 'Lead form';
    icon: 'at';
    name: 'Lead form';
  };
  attributes: {
    description: Schema.Attribute.Text;
    emailPlaceholder: Schema.Attribute.String;
    location: Schema.Attribute.String;
    submitButton: Schema.Attribute.Component<'links.button', false>;
    title: Schema.Attribute.String;
  };
}

export interface SectionsLocalisation extends Struct.ComponentSchema {
  collectionName: 'components_sections_localisations';
  info: {
    displayName: 'Localisation';
    icon: 'plane';
  };
  attributes: {
    description: Schema.Attribute.Text;
    map: Schema.Attribute.Component<'shared.map', false>;
  };
}

export interface SectionsPhotoGallery extends Struct.ComponentSchema {
  collectionName: 'components_sections_photo_galleries';
  info: {
    description: '';
    displayName: 'Photo  gallery';
    icon: 'picture';
  };
  attributes: {
    mediaList: Schema.Attribute.Media<'images', true>;
  };
}

export interface SectionsReservation extends Struct.ComponentSchema {
  collectionName: 'components_sections_reservations';
  info: {
    displayName: 'Reservation';
    icon: 'envelop';
  };
  attributes: {
    cancellation: Schema.Attribute.RichText;
    note: Schema.Attribute.Text;
    rules: Schema.Attribute.RichText;
  };
}

export interface SectionsRichText extends Struct.ComponentSchema {
  collectionName: 'components_sections_rich_texts';
  info: {
    displayName: 'Rich text';
    icon: 'text-height';
    name: 'RichText';
  };
  attributes: {
    content: Schema.Attribute.RichText;
  };
}

export interface SharedContact extends Struct.ComponentSchema {
  collectionName: 'components_shared_contacts';
  info: {
    displayName: 'Contact';
  };
  attributes: {
    address: Schema.Attribute.String;
    email: Schema.Attribute.Email;
    phone: Schema.Attribute.String;
  };
}

export interface SharedMap extends Struct.ComponentSchema {
  collectionName: 'components_shared_maps';
  info: {
    displayName: 'Map';
    icon: 'earth';
  };
  attributes: {
    address: Schema.Attribute.String;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    description: '';
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
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
