package com.emojipopup

import com.facebook.react.common.MapBuilder
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.UIManagerHelper
import com.facebook.react.uimanager.ViewManagerDelegate
import com.facebook.react.viewmanagers.EmojiPopupViewManagerInterface
import com.facebook.react.viewmanagers.EmojiPopupViewManagerDelegate

@ReactModule(name = EmojiPopupViewManager.NAME)
class EmojiPopupViewManager : SimpleViewManager<EmojiPopupView>(),
  EmojiPopupViewManagerInterface<EmojiPopupView> {
  private val mDelegate: ViewManagerDelegate<EmojiPopupView> = EmojiPopupViewManagerDelegate(this)

  override fun getDelegate(): ViewManagerDelegate<EmojiPopupView> {
    return mDelegate
  }

  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): EmojiPopupView {
    val view = EmojiPopupView(context)
    val eventDispatcher = UIManagerHelper.getEventDispatcherForReactTag(context, view.id)
    view.onEmojiSelectedListener = { emoji ->
      eventDispatcher?.dispatchEvent(EmojiSelectedEvent(viewTag = view.id, emoji))
    }
    return view
  }

  override fun getExportedCustomDirectEventTypeConstants(): MutableMap<String, Any>? {
    return MapBuilder.of(
      EmojiSelectedEvent.EVENT_NAME,
      MapBuilder.of("registrationName", "onEmojiSelected"),
    )
  }

  companion object {
    const val NAME = "EmojiPopupView"
  }
}
