/**
 * editor_plugin_src.js
 *
 * Copyright 2009, Moxiecode Systems AB
 * Released under LGPL License.
 *
 * License: http://tinymce.moxiecode.com/license
 * Contributing: http://tinymce.moxiecode.com/contributing
 */

(function() {
	// Load plugin specific language pack
	tinymce.PluginManager.requireLangPack('youtube');

	tinymce.create('tinymce.plugins.YouTubePlugin', {
		/**
		 * Initializes the plugin, this will be executed after the plugin has been created.
		 * This call is done before the editor instance has finished it's initialization so use the onInit event
		 * of the editor instance to intercept that event.
		 *
		 * @param {tinymce.Editor} ed Editor instance that the plugin is initialized in.
		 * @param {string} url Absolute URL to where the plugin is located.
		 */
		init : function(ed, url) {

            // The URL is wrong because the plugin is manual... not sure what's going on here.
            url = '/kotti_tinycme_static/tinymce-youtube/';

            // This doesn't work because of Kotti traversal
            // url = url + '/static/scripts/tinymce-youtube/';

			// Register the command so that it can be invoked by using tinyMCE.activeEditor.execCommand('mceExample');
			ed.addCommand('mceYouTube', function() {
				ed.windowManager.open({
					file: url + '/dialog.htm?time=' + Math.random(),
					width: 320 + parseInt(ed.getLang('youtube.delta_width', 0), 10),
					height: 150 + parseInt(ed.getLang('youtube.delta_height', 0), 10),
					inline: 1
				}, {
					plugin_url : url, // Plugin absolute URL
					some_custom_arg : 'custom arg' // Custom argument
				});
			});

			// Register example button
			ed.addButton('youtube', {
				title : 'youtube.desc',
				cmd : 'mceYouTube',
				image : url + '/img/youtube-icon.gif'
			});

			// Add a node change handler, selects the button in the UI when a image is selected
			ed.onNodeChange.add(function(ed, cm, n) {
				cm.setActive('youtube', n.nodeName == 'IMG');
			});
		},

		/**
		 * Creates control instances based in the incomming name. This method is normally not
		 * needed since the addButton method of the tinymce.Editor class is a more easy way of adding buttons
		 * but you sometimes need to create more complex controls like listboxes, split buttons etc then this
		 * method can be used to create those.
		 *
		 * @param {String} n Name of the control to create.
		 * @param {tinymce.ControlManager} cm Control manager to use inorder to create new control.
		 * @return {tinymce.ui.Control} New control instance or null if no control was created.
		 */
		createControl : function(n, cm) {
			return null;
		},

		/**
		 * Returns information about the plugin as a name/value array.
		 * The current keys are longname, author, authorurl, infourl and version.
		 *
		 * @return {Object} Name/value array containing information about the plugin.
		 */
		getInfo : function() {
			return {
				longname : 'YouTube plugin',
				author : 'Jimmy Hillis',
				authorurl : 'http://jimmy.hillis.me/',
				infourl : 'http://github.com/jimmyhillis/tinymce-youtube',
				version : "1.0"
			};
		}

	});

	// Register plugin
	tinymce.PluginManager.add('youtube', tinymce.plugins.YouTubePlugin);
})();
