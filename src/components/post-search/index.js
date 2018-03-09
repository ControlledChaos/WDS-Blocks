/**
 * WordPress dependencies
 */
const { __ } = wp.i18n;
const {
  UrlInput,
} = wp.blocks;
const {
	DashIcon,
	PanelBody,
	PanelRow,
} = wp.components;

function PostSearch( props ) {
	//const setTextColor = value => props.setAttributes( { textColor: value } );
  //const { value } = this.props;

	return (
		<PanelBody
			title={ __( 'Search for Post' ) }
			className="wds-post-search-container"
		>
			<PanelRow>
				<div className="wds-post-search">
					<Dashicon icon="admin-links" />
					<UrlInput className="url" value="http://kellenmace.com" onChange={ () => console.log( 'changed' ) } />
				</div>
			</PanelRow>
		</PanelBody>
	);
}

export default PostSearch;