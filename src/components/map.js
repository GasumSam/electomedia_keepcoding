import React, { useEffect, useRef, useState } from "react"
import * as d3 from "d3"
import { numberWithCommas } from "../helpers/helper"

const Popup = props => {
  return (
    <div
      id="popup"
      style={{
        display: props.visibility ? "block" : "none",
        left: 1200 + "px",
        top: 350 + "px",
      }}
    >
      <h6>{props.PROVINCIA}</h6> 
      <table>
        <thead>
          <tr>
          <tr><th>Partido Socialista</th><td>{props.PSOE}</td></tr>
          <tr><th>Partido Popular</th><td>{props.PP}</td></tr>
          <tr><th>VOX</th><td>{props.VOX}</td></tr>
          <tr><th>Unidas Podemos</th><td>{props.UP}</td></tr>
          <tr><th>Esquerra Republica Catalunya</th><td>{props.ERC}</td></tr>
          <tr><th>Ciudadanos</th><td>{props.CS}</td></tr>
          <tr><th>Junts per Cat</th><td>{props.JxC}</td></tr>
          <tr><th>Partido Nacionalista Vasco</th><td>{props.PNV}</td></tr>
          <tr><th>BILDU</th><td>{props.BILD}</td></tr>
          <tr><th>Más País</th><td>{props.M_PA}</td></tr>
          <tr><th>Coalición Canaria</th><td>{props.CCA}</td></tr>
          <tr><th>Navarra Suma</th><td>{props.NA_S}</td></tr>
          <tr><th>Compromis</th><td>{props.COMP}</td></tr>
          <tr><th>Bloque Nacionalista Galego</th><td>{props.BNG}</td></tr>
          <tr><th>Partido Regionalista de Cantabria</th><td>{props.PRC}</td></tr>
          <tr><th>Teruel Existe</th><td>{props.T_EX}</td></tr>
          </tr>
        </thead>
        <tbody>
          <tr>
          <tr></tr>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

const SpainMap = ({
  mapData,
  popupData,
  width,
  height,
  scale,
  mouseLeaveHandler,
  mouseMoveHandler,
  mouseEnterHandler,
   }) => {
  const svgRef = useRef(null)
  let ratio = 0
      /*
  const fillColor = number => {
      if (number > 0) {
        //if (number < 50) {
          return "#ff9f9f"
          }
    }
  



    if ( data.PP > 25 & data.PSOE <= 35) {
      //if (number < 50) {
        return "#c0dec7"
      }
    if (data.PP > 2) {
      //if (number < 50) {
        return "#ccdfff"
      }
   */

  const createThePlot = () => {
    const w = width
    const h = height

    const svg = d3
      .select(svgRef.current)
      .append("svg")
      .attr("width", "100%")
      .attr("height", "100%")
      .attr("id", "svg-map-spain")
      .attr("pointer-events", "auto")
      .attr("preserveAspectRatio", "none")
      .attr("viewBox", `0 0 ${width} ${height}`)
      .on("mousemove", function(e) {
        mouseMoveHandler(d3.mouse(this)[0] * ratio, d3.mouse(this)[1] * ratio)
      })

    const projection = d3.geo
      .azimuthalEqualArea()
      .rotate([0, 0])
      .center([-2, 39])
      .scale(scale*2)
      .translate([w / 2, h / 2])

    const path = d3.geo.path().projection(projection)

    svg
      .selectAll("append")
      .data(mapData.features)
      .enter()
      .append("path")
      .attr("d", path)
      //.attr("fill", (d, i) => fillColor(popupData[i].PSOE)) // Declaración de la variable number
      .attr("fill", (d, i) => {if((popupData[i].ERC) > (popupData[i].PSOE)){return "#ffe49e"}
      else if((popupData[i].PNV) = 3){return "#2D572C"}
      else if((popupData[i].PSOE) < (popupData[i].PP)){return "#0070B8"}
      else if((popupData[i].PSOE) > (popupData[i].PP)){return "#C81D11}
      else if((popupData[i].VOX) > (popupData[i].PP)){return "#c0dec7"}  
      else if((popupData[i].PSOE) = (popupData[i].PP)){return "#dedec5"}
      else if((popupData[i].ERC = popupData[i].PSOE) && (popupData[i].PSOE > popupData[i].PP)){return "#dedec5"}
      else if((popupData[i].ERC) = (popupData[i].JxC)){return "#dedec5"}

    })  
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .on("mouseenter", function(d, i, e) {  // e declarada en la linea 128
        mouseEnterHandler(
          popupData[i].PROVINCIA,
          popupData[i].PSOE,
          popupData[i].PP,
          popupData[i].VOX,
          popupData[i].UP,
          popupData[i].ERC,
          popupData[i].CS,
          popupData[i].JxC,
          popupData[i].PNV,
          popupData[i].BILD,
          popupData[i].M_PA,
          popupData[i].CCA,
          popupData[i].NA_S,
          popupData[i].COMP,
          popupData[i].BNG,
          popupData[i].PRC,
          popupData[i].T_EX
        )
      })
      .on("mouseleave", function() {
        mouseLeaveHandler()

      })

    
    ratio = svgRef.current.getBoundingClientRect().height / height

    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("text")
      //.attr("x", (d, i) => countPos[i].cx)
      //.attr("y", (d, i) => countPos[i].cy)
      .attr("text-anchor", "middle")
      .attr("class", "counter-on-map")
      .text((d, i) => d.PSOE)
      .on("mouseenter", function(d, i, e) {  // e declarada en la linea 128
        mouseEnterHandler(
          popupData[i].PROVINCIA,
          popupData[i].PSOE,
          popupData[i].PP,
          popupData[i].VOX,
          popupData[i].UP,
          popupData[i].ERC,
          popupData[i].CS,
          popupData[i].JxC,
          popupData[i].PNV,
          popupData[i].BILD,
          popupData[i].M_PA,
          popupData[i].CCA,
          popupData[i].NA_S,
          popupData[i].COMP,
          popupData[i].BNG,
          popupData[i].PRC,
          popupData[i].T_EX
        )
      })
      .on("mouseleave", function() {
        mouseLeaveHandler()

      })
/*
    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("circle")
      .attr('cx', 250)
      .attr('cy', 700)
      .attr('r', 25)
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .attr('fill', '#ff9f9f')

    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("circle")
      .attr('cx', 450)
      .attr('cy', 700)
      .attr('r', 25)
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .attr('fill', '#78b5b8')

    svg
      .selectAll("append")
      .data(popupData)
      .enter()
      .append("circle")
      .attr('cx', 650)
      .attr('cy', 700)
      .attr('r', 25)
      .attr("stroke", "#444")
      .attr("stroke-width", "0.35")
      .attr('fill', '#dedec5')*/
  }

  useEffect(() => {
    createThePlot()
  }, [])

  return <div ref={svgRef} id="svg-holder" className="column"></div>
}

const Circle = () => {
  return (
    <div className="column center-text" id="total-holder">
      <div className="total-group"></div>
        <h1 className="h-title">Total PSOE</h1>
      </div>
  )
}

export default ({ data, mapData }) => {
  const [PROVINCIA, setProvince] = useState("")
  const [PSOE, setPSOE] = useState(0)
  const [PP, setPP] = useState(0)
  const [VOX, setVOX] = useState(0)
  const [UP, setUP] = useState(0)
  const [ERC, setERC] = useState(0)
  const [CS, setCS] = useState(0)
  const [JxC, setJxC] = useState(0)
  const [PNV, setPNV] = useState(0)
  const [BILD, setBILD] = useState(0)
  const [M_PA, setM_PA] = useState(0)
  const [CCA, setCCA] = useState(0)
  const [NA_S, setNA_S] = useState(0)
  const [COMP, setCOMP] = useState(0)
  const [BNG, setBNG] = useState(0)
  const [PRC, setPRC] = useState(0)
  const [T_EX, setT_EX] = useState(0)
  const [popup, setPopup] = useState({ left: 0, top: 0 })
  const [visible, setVisible] = useState(false)

  const cumulativeOffset = element => {
    let top = 0,
      left = 0
    do {
      top += element.offsetTop || 0
      left += element.offsetLeft || 0
      element = element.offsetParent
    } while (element)

    return {
      top: top,
      left: left,
    }
  }

  const mouseMove = (left, top) => {
    const data = cumulativeOffset(document.getElementById("svg-holder"))
    let tmp = { ...popup }
    tmp.left = left + data.left - 0
    tmp.top = top + data.top - 80
    setPopup(tmp)
  }

  const mouseEnter = (PROVINCIA, PSOE, PP, VOX, UP, ERC, CS, JxC, PNV, BILD, M_PA, CCA, NA_S, COMP, BNG, PRC, T_EX) => {
    setVisible(true)
    setProvince(PROVINCIA)
    setPSOE(numberWithCommas(PSOE))
    setPP(numberWithCommas(PP))
    setVOX(numberWithCommas(VOX))
    setUP(numberWithCommas(UP))
    setERC(numberWithCommas(ERC))
    setCS(numberWithCommas(CS))
    setJxC(numberWithCommas(JxC))
    setPNV(numberWithCommas(PNV))
    setBILD(numberWithCommas(BILD))
    setM_PA(numberWithCommas(M_PA))
    setCCA(numberWithCommas(CCA))
    setNA_S(numberWithCommas(NA_S))
    setCOMP(numberWithCommas(COMP))
    setBNG(numberWithCommas(BNG))
    setPRC(numberWithCommas(PRC))
    setT_EX(numberWithCommas(T_EX))
  }

  const mouseLeave = () => {
    setVisible(false)
  }

  return (
    <div
      id="map-holder"
      role="img"
      aria-label="Map showing provinces hit by the virus"
      className="container"
    >
      <Popup
        PROVINCIA={PROVINCIA}
        PSOE={PSOE}
        PP={PP}
        VOX={VOX}
        UP={UP}
        ERC={ERC}
        CS={CS}
        JxC={JxC}
        PNV={PNV}
        BILD={BILD}
        M_PA={M_PA}
        CCA={CCA}
        NA_S={NA_S}
        COMP={COMP}
        BNG={BNG}
        PRC={PRC}
        T_EX={T_EX}
        visibility={visible}
        left={popup.left}
        top={popup.top}
      />

      <SpainMap
        mapData={mapData}
        popupData={data}
        mouseMoveHandler={mouseMove}
        mouseEnterHandler={mouseEnter}
        mouseLeaveHandler={mouseLeave}
        width={1200}
        height={800}
        scale={2000}
      />

    </div>
    
  )
}
