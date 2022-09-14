function Logo(props){
    return (
        <div className={props.logoContenedorCss}>
          <img
            src={props.logoSrc}
            className={props.logoCss}
            alt={props.logoAlt}
          />
        </div>
    );
}

export default Logo;