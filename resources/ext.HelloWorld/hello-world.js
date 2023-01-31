mw.loader.using( [ 'mediawiki.util' ], function () {
	$.ready( document ).ready( function () {
		// eslint-disable-next-line no-jquery/no-global-selector
		$( 'body' ).append(
			$( '<div>' ).attr( 'id', 'hello-world' )
				.text( 'Hello World' )
		);
	} );
} );
