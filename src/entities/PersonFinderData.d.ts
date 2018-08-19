export interface PersonFinderData {
    pfif: Pfif;
  }
  export interface Pfif {
    $: $;
    person?: (PersonEntity)[] | null;
  }
  export interface $ {
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
    alternate_names?: (string)[] | null;
    sex?: (string)[] | null;
    age?: (string)[] | null;
    home_street?: (string)[] | null;
    home_city?: (string)[] | null;
    home_country?: (string)[] | null;
    note?: (NoteEntity)[] | null;
    home_state?: (string)[] | null;
    author_email?: (string)[] | null;
    description?: (string)[] | null;
    home_postal_code?: (string)[] | null;
  }
  export interface NoteEntity {
    note_record_id?: (string)[] | null;
    person_record_id?: (string)[] | null;
    entry_date?: (string)[] | null;
    author_name?: (string)[] | null;
    author_phone?: (string)[] | null;
    source_date?: (string)[] | null;
    author_made_contact?: (string)[] | null;
    status?: (string)[] | null;
    last_known_location?: (string)[] | null;
    text?: (string)[] | null;
    phone_of_found_person?: (string)[] | null;
  }
  