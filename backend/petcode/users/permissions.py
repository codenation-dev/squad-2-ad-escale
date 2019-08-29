from rest_framework import permissions
from rest_framework.decorators import action

class PublicRetrieveAndListOnly(permissions.IsAuthenticated):
    """
    Custom permission to only allow list and retrieve without authorization
    """
    def has_permission(self, request, view):
        if view.action in ['list', 'retrieve']:
            return True
        else:
            return bool(request.user and request.user.is_authenticated)


class PublicCreateOnly(permissions.IsAuthenticated):
    """
    Custom permission to only allow create without authorization
    """
    def has_permission(self, request, view):
        if view.action in ['create',]:
            return True
        else:
            return bool(request.user and request.user.is_authenticated)