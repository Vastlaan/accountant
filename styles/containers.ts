import styled from 'styled-components'
import respond from './respond'
import {FlexibleComponentProps, ThemeProps} from '../types'


// GRIDS

export const MainGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  ${()=>respond('s', 'grid-template-columns: 1fr 1fr;')}
  ${()=>respond('m', 'grid-template-columns: 55rem 1fr;')}
  ${()=>respond('l', 'grid-template-columns: 65rem 1fr;')}
`

// SECTIONS AND HEADERS

export const SectionWide = styled.section<FlexibleComponentProps>`
  width: 100%;
  position: relative;
  margin: ${(p) =>p.margin?p.margin:"0"};
  padding:${p=>p.padding?p.padding:'0'};
  background-color: ${p=>p.background?p.background:'transparent'};
`

export const SectionNarrow = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p:ThemeProps)=>p.color?p.color:'transparent'};
  padding: 1.4rem;
`
export const SectionNarrowAnimated = styled.section<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  background-color: ${(p:ThemeProps)=>p.color?p.color:'transparent'};
  padding: 1.4rem;
  transform: translateY(100px);
  opacity: 0;
  visibility: hidden;
`

// CONTAINERS

export const ContainerNarrow = styled.div<FlexibleComponentProps>`
  max-width: 996px;
  margin: ${(p) =>p.margin?p.margin:"0 auto"};
  padding: ${p=>p.padding?p.padding:'0'};
`

export const FlexRow = styled.div<FlexibleComponentProps>`
  display:flex;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
`
export const FlexCol = styled.div<FlexibleComponentProps>`
  display:flex;
  flex-direction: column;
  margin: ${p=>p.margin?p.margin:'0'};
  padding: ${p=>p.padding?p.padding:'0'};
  justify-content: ${p=>p.justify?p.justify:'center'};
  align-items: ${p=>p.align?p.align:'center'};
  background-color: ${p=>p.background?p.background:'transparent'};
`

export const ContainerAnimated = styled.div`
  transform: translate(0, 100px);
  opacity: 0;
  visibility: hidden;
`

