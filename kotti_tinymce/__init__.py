from pyramid.renderers import render

from kotti.views.slots import register
from kotti.views.slots import RenderEditInHead

def render_resource_links(context, request):
    return render('kotti_tinymce:templates/resources.pt', {}, request)

def kotti_configure(settings):
    settings['kotti.includes'] += ' kotti_tinymce'
    settings['pyramid_deform.template_search_path'] = (
        'kotti_tinymce:templates/deform ' +
        settings['pyramid_deform.template_search_path'])

def includeme(config):
    config.add_static_view(
        name='static-kotti-tinymce-skins',
        path='kotti_tinymce:Products.TinyMCE/Products/TinyMCE/skins/tinymce/',
        )

    register(RenderEditInHead, None, render_resource_links)
