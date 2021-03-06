import { libHandleFetchResult } from './helper.js'
import fr from './translate/fr.js'
import en from './translate/en.js'

import libPopinFixed from './component/PopinFixed/PopinFixed.jsx'
import libPopinFixedHeader from './component/PopinFixed/PopinFixedHeader.jsx'
import libPopinFixedOption from './component/PopinFixed/PopinFixedOption.jsx'
import libPopinFixedContent from './component/PopinFixed/PopinFixedContent.jsx'

import libTimeline from './component/Timeline/Timeline.jsx'

import libTextAreaApp from './component/Input/TextAreaApp/TextAreaApp.jsx'
import libBtnSwitch from './component/Input/BtnSwitch/BtnSwitch.jsx'

import libDelimiter from './component/Delimiter/Delimiter.jsx'

export const langFr = fr
export const langEn = en

export const handleFetchResult = libHandleFetchResult

export const PopinFixed = libPopinFixed
export const PopinFixedHeader = libPopinFixedHeader
export const PopinFixedOption = libPopinFixedOption
export const PopinFixedContent = libPopinFixedContent

export const Timeline = libTimeline

export const TextAreaApp = libTextAreaApp
export const BtnSwitch = libBtnSwitch

export const Delimiter = libDelimiter
