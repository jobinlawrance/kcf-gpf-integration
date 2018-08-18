export interface PersonFinderData {
    feed: Feed;
  }
  export interface Feed {
    id?: (string)[] | null;
    title?: (string)[] | null;
    subtitle?: (string)[] | null;
    updated?: (string)[] | null;
    link?: (LinkEntity)[] | null;
    entry?: (EntryEntity)[] | null;
  }

  export interface LinkEntity {
    _: string;
    $: $1;
  }
  export interface $1 {
    rel: string;
  }
  export interface EntryEntity {
    person?: (PersonEntity)[] | null;
    id?: (string)[] | null;
    title?: (string)[] | null;
    author?: (AuthorEntity | string)[] | null;
    updated?: (string)[] | null;
    source?: (SourceEntity)[] | null;
    content?: (string)[] | null;
  }
  export interface PersonEntity {
    person_record_id?: (string)[] | null;
    entry_date?: (string)[] | null;
    expiry_date?: (string)[] | null;
    author_name?: (string)[] | null;
    author_phone?: (string)[] | null;
    source_name?: (string)[] | null;
    source_date?: (string)[] | null;
    source_url?: (string)[] | null;
    full_name?: (string)[] | null;
    given_name?: (string)[] | null;
    family_name?: (string)[] | null;
    description?: (string)[] | null;
    sex?: (string)[] | null;
    age?: (string)[] | null;
    home_street?: (string)[] | null;
    home_city?: (string)[] | null;
    home_neighborhood?: (string)[] | null;
    home_state?: (string)[] | null;
    home_country?: (string)[] | null;
    photo_url?: (string)[] | null;
    note?: (NoteEntity)[] | null;
    home_postal_code?: (string)[] | null;
    author_email?: (string)[] | null;
  }
  export interface NoteEntity {
    note_record_id?: (string)[] | null;
    person_record_id?: (string)[] | null;
    entry_date?: (string)[] | null;
    author_name?: (string)[] | null;
    source_date?: (string)[] | null;
    last_known_location?: (string)[] | null;
    text?: (string)[] | null;
    author_phone?: (string)[] | null;
    author_made_contact?: (string)[] | null;
    status?: (string)[] | null;
    author_email?: (string)[] | null;
    phone_of_found_person?: (string)[] | null;
  }
  export interface AuthorEntity {
    name?: (string)[] | null;
    email?: (string)[] | null;
  }
  export interface SourceEntity {
    title?: (string)[] | null;
  }
  