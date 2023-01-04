function Paragraph(props) {
  return (
    <div>
      <h2>{props.title}</h2>
      {props.children}
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum quae labore
        iure quod aliquam minima est vitae sapiente culpa quos dignissimos,
        aperiam, dolore consequuntur cumque nobis ea tempore reprehenderit quis?
      </p>
    </div>
  );
}

export default Paragraph;
