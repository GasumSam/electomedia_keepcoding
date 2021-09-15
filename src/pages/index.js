import React from "react"
import Layout from "../components/layout"
import Map from "../components/map"
import LastUpdate from "../components/last-update"
import Table from "../components/table"
//import Total from "../components/total"
import FAQs from "../components/FAQs"
import { useStaticQuery, graphql } from "gatsby"
import spainMapData from "../../static/spain.json"
//import Circle from "../components/circle"



const DataSourceReference = props => {
  return (
    <p
      id="data-source"
      dangerouslySetInnerHTML={{ __html: "Fuentes: " + props.data }}
    />
  )
}

export default props => {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        name
        description
        last_updated
        data {
          PROVINCIA
          PSOE
          PP
          VOX
          UP
          ERC
          CS
          JxC
          PNV
          BILD
          M_PA
          CCA
          NA_S
          COMP
          BNG
          PRC
          T_EX
        }
        data_source
        faqs {
          question
          answer
        }
      }
    }
  }
  `)
  return (
    <Layout
      pageTitle={data.site.siteMetadata.name}
      pageDescription={data.site.siteMetadata.description}
    >
      <LastUpdate date={data.site.siteMetadata.last_updated} />
      <DataSourceReference data={data.site.siteMetadata.data_source} />
       <div className="container">
        <div className="dummy-link" id="tables-link">
          <div id="faqs"><h5>Diputados al Congreso por Circunscripción Electoral - <b>Elecciones Generales Noviembre 2019</b></h5></div>
     
          </div>
          </div>
      <Map data={data.site.siteMetadata.data} mapData={spainMapData} />
      
      <div className="container">
      <div id="faqss">
            <div id="candi_back"><div className="candi">Candidaturas más votadas:</div></div>
            <div id="psoe_back"><div className="psoe">PSOE</div></div>
            <div id="pp_back"><div className="pp">PP</div></div>
            <div id="erc_back"><div className="erc">ERC</div></div>
            <div id="pnv_back"><div className="pnv">PNV</div></div>
            <div id="empate_back"><div className="empate">Empate</div></div>
          </div>
        <div className="dummy-link" id="tables-link">

          </div>
        <div className="row" id="middle-info-holder">
          <Table data={data.site.siteMetadata.data} />
        </div>
        <div className="colors"></div>
        <div className="dummy-link" id="faqs-link"></div>
        <FAQs data={data.site.siteMetadata.faqs} />
      </div>
    </Layout>
  )
}
