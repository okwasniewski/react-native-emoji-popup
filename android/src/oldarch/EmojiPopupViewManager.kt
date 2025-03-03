package com.emojipopup

import com.facebook.react.common.MapBuilder
import com.facebook.react.module.annotations.ReactModule
import com.facebook.react.uimanager.SimpleViewManager
import com.facebook.react.uimanager.ThemedReactContext
import com.facebook.react.uimanager.UIManagerModule

@ReactModule(name = EmojiPopupViewManager.NAME)
class EmojiPopupViewManager : SimpleViewManager<EmojiPopupView>() {
  override fun getName(): String {
    return NAME
  }

  public override fun createViewInstance(context: ThemedReactContext): EmojiPopupView {
    val view = EmojiPopupView(context)
    val eventDispatcher = context.getNativeModule(UIManagerModule::class.java)!!.eventDispatcher
    view.onEmojiSelectedListener = { emoji ->
      eventDispatcher.dispatchEvent(EmojiSelectedEvent(viewTag = view.id, emoji))
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
