export class RequestBodyDTO {
    readonly action_id: string;
    readonly conversation: Conversation;
    readonly nlp: Nlp;
}

export class Conversation {
    readonly id: string;
    readonly language: string;
    readonly memory: Memory;
    readonly participan_data: string;
    readonly skill: string;
    readonly skill_occurences: number;
    readonly skill_stack: string[];
}

export class Nlp {
    readonly act: string;
    readonly entities: string[];
    readonly intents: string[];
    readonly language: string;
    readonly processing_language: string;
    readonly sentiment: string;
    readonly source: string;
    readonly status: number;
    readonly timestamp: string;
    readonly type: string;
    readonly uudd: string;
    readonly version: string;
}

export class Memory {
    readonly entitySample: Entity;
}

export class Entity {
    readonly confidence: number;
    readonly raw: string;
    readonly value: string;
}