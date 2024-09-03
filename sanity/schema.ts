import { type SchemaTypeDefinition } from 'sanity'
import {home} from './schemas/documents/home'
import { page } from './schemas/documents/page'
import { project } from './schemas/documents/project'
import { article } from './schemas/documents/article'
import global from './schemas/globals/global' 
import cards from './schemas/objects/cards'
import cardItems from './schemas/objects/cardItems'

export const schema:SchemaTypeDefinition[] = [home,page, project,cards, cardItems, article, global]
