export default {
  title: 'Reference'
}

export const SvgExample = () => 
(<svg>
    <line x1="0"  y1="10" x2="0"   y2="100" style={{stroke:"#006600", "stroke-width": 3}}/>
    <circle cx="40" cy="40" r="24" style={{stroke:"#006600", "stroke-width": 3, fill:"#00cc00"}}/>
    <text x="80"  y="40" >Example Text</text>
</svg>);