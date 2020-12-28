export const convertSvgToImage = (svgRef) => {
  const svg = svgRef;
  let svgData = new XMLSerializer().serializeToString(svg);
  const canvas = document.createElement('canvas');
  canvas.setAttribute('id', 'canvas');
  const svgSize = svg.getBoundingClientRect();
  canvas.width = svgSize.width;
  canvas.height = svgSize.height;
  const img = document.createElement('img');
  img.setAttribute(
    'src',
    'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)))
  );
  img.onload = function() {
    canvas.getContext('2d').drawImage(img, 0, 0);
    const canvasdata = canvas.toDataURL('image/png');
    const a = document.createElement('a');
    a.download = 'meme.png';
    a.href = canvasdata;
    document.body.appendChild(a);
    a.click();
  };
};
